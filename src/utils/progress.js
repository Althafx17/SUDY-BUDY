/**
 * Progress Calculation Rules:
 * - A topic's completion = if it has sub-topics, % of sub-topics done;
 *   else 1 if status is "studied" or "revised", else 0.
 * - Module progress = average of its topics' completion.
 * - Subject progress = average of its modules' completion.
 * - Separate "revision progress" per subject = % of topics with
 *   status "revised" out of topics that are at least "studied".
 */

export function calculateTopicCompletion(topic) {
  if (!topic) return 0;
  if (topic.subTopics && topic.subTopics.length > 0) {
    const doneCount = topic.subTopics.filter(st => st.done).length;
    return doneCount / topic.subTopics.length;
  }
  return (topic.status === 'studied' || topic.status === 'revised') ? 1 : 0;
}

export function calculateModuleProgress(module) {
  if (!module || !module.topics || module.topics.length === 0) return 0;
  const sum = module.topics.reduce((acc, topic) => acc + calculateTopicCompletion(topic), 0);
  return sum / module.topics.length;
}

export function calculateSubjectProgress(subject) {
  if (!subject || !subject.modules || subject.modules.length === 0) return 0;
  const sum = subject.modules.reduce((acc, mod) => acc + calculateModuleProgress(mod), 0);
  return sum / subject.modules.length;
}

export function calculateSubjectRevisionProgress(subject) {
  if (!subject || !subject.modules || subject.modules.length === 0) return 0;
  const allTopics = subject.modules.flatMap(m => m.topics || []);
  if (allTopics.length === 0) return 0;

  // Topics that are at least "studied" (studied, needs-revision, or revised)
  const eligibleTopics = allTopics.filter(
    t => t.status === 'studied' || t.status === 'needs-revision' || t.status === 'revised'
  );

  if (eligibleTopics.length === 0) return 0;

  const revisedTopics = eligibleTopics.filter(t => t.status === 'revised');
  return (revisedTopics.length / eligibleTopics.length) * 100;
}

export function getSubjectStats(subject) {
  const allModules = subject?.modules || [];
  const allTopics = allModules.flatMap(m => m.topics || []);
  const allSubTopics = allTopics.flatMap(t => t.subTopics || []);

  const totalTopics = allTopics.length;
  const completedTopics = allTopics.filter(t => calculateTopicCompletion(t) === 1).length;
  const revisedTopics = allTopics.filter(t => t.status === 'revised').length;
  const needsRevisionTopics = allTopics.filter(t => t.status === 'needs-revision').length;

  return {
    modulesCount: allModules.length,
    topicsCount: totalTopics,
    completedTopics,
    revisedTopics,
    needsRevisionTopics,
    subTopicsCount: allSubTopics.length,
    progressPercent: Math.round(calculateSubjectProgress(subject) * 100),
    revisionPercent: Math.round(calculateSubjectRevisionProgress(subject))
  };
}

export function getSemesterStats(semesterData) {
  const subjects = semesterData?.subjects || [];
  if (subjects.length === 0) {
    return {
      subjectsCount: 0,
      overallProgress: 0,
      totalTopics: 0,
      completedTopics: 0,
      revisedTopics: 0,
      revisionProgress: 0
    };
  }

  const allTopics = subjects.flatMap(s => (s.modules || []).flatMap(m => m.topics || []));
  const totalTopics = allTopics.length;
  const completedTopics = allTopics.filter(t => calculateTopicCompletion(t) === 1).length;
  const eligibleRevision = allTopics.filter(
    t => t.status === 'studied' || t.status === 'needs-revision' || t.status === 'revised'
  );
  const revisedTopics = allTopics.filter(t => t.status === 'revised').length;

  const subjectProgressSum = subjects.reduce((acc, s) => acc + calculateSubjectProgress(s), 0);
  const overallProgress = subjects.length > 0 ? Math.round((subjectProgressSum / subjects.length) * 100) : 0;
  const revisionProgress = eligibleRevision.length > 0 ? Math.round((revisedTopics / eligibleRevision.length) * 100) : 0;

  return {
    subjectsCount: subjects.length,
    overallProgress,
    totalTopics,
    completedTopics,
    revisedTopics,
    revisionProgress
  };
}

/**
 * Returns the nearest upcoming subject with an examDate in the given semester
 */
export function getNearestUpcomingExam(subjects) {
  if (!subjects || subjects.length === 0) return null;
  const now = new Date().getTime();

  const scheduled = subjects
    .filter(s => s.examDate && !isNaN(new Date(s.examDate).getTime()))
    .map(s => ({
      subject: s,
      time: new Date(s.examDate).getTime(),
      diff: new Date(s.examDate).getTime() - now
    }))
    .filter(item => item.diff > 0)
    .sort((a, b) => a.diff - b.diff);

  return scheduled.length > 0 ? scheduled[0] : null;
}

/**
 * Formats time difference into days, hours, minutes, seconds
 */
export function formatTimeRemaining(diffMs) {
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Determines if an exam is within 7 days from now
 */
export function isExamWithin7Days(dateString) {
  if (!dateString) return false;
  const examTime = new Date(dateString).getTime();
  if (isNaN(examTime)) return false;
  const diff = examTime - Date.now();
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  return diff >= 0 && diff <= sevenDaysMs;
}
