// Persistent Study Activity Tracker
const STORAGE_KEY = 'study-tracker-activity';

/**
 * Returns today's date formatted as YYYY-MM-DD in local time
 */
export function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Retrieves the activity record mapping date strings ('YYYY-MM-DD') to study session counts
 */
export function getStudyActivity() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Error reading study activity from localStorage:', e);
  }
  return {};
}

/**
 * Saves activity record to localStorage
 */
export function saveStudyActivity(activity) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activity));
  } catch (e) {
    console.error('Error saving study activity to localStorage:', e);
  }
}

/**
 * Check if study has been recorded for today
 */
export function isStudiedToday(activity = null) {
  const data = activity || getStudyActivity();
  const today = getTodayDateString();
  return (data[today] || 0) > 0;
}

/**
 * Toggles today's study state (sets 1 if 0, or 0 if active)
 */
export function toggleTodayStudy() {
  const data = { ...getStudyActivity() };
  const today = getTodayDateString();
  const currentCount = data[today] || 0;

  if (currentCount > 0) {
    delete data[today];
  } else {
    data[today] = 1;
  }

  saveStudyActivity(data);
  return data;
}

/**
 * Increments study count for today or a specified date
 */
export function recordStudyEvent(dateString = null, countToAdd = 1) {
  const data = { ...getStudyActivity() };
  const targetDate = dateString || getTodayDateString();
  data[targetDate] = (data[targetDate] || 0) + countToAdd;
  saveStudyActivity(data);
  return data;
}

/**
 * Calculates current active streak in consecutive days ending today or yesterday
 */
export function calculateStreak(activity) {
  if (!activity || Object.keys(activity).length === 0) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let checkDate = new Date(today);
  const formatDate = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  // If today hasn't been studied yet, check if yesterday was studied to keep the streak going
  let todayStr = formatDate(checkDate);
  let streak = 0;

  if ((activity[todayStr] || 0) > 0) {
    streak++;
    checkDate.setDate(checkDate.getDate() - 1);
  } else {
    // Check yesterday
    checkDate.setDate(checkDate.getDate() - 1);
    const yesterdayStr = formatDate(checkDate);
    if ((activity[yesterdayStr] || 0) > 0) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      return 0;
    }
  }

  // Count backwards day by day
  while (true) {
    const dateStr = formatDate(checkDate);
    if ((activity[dateStr] || 0) > 0) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Calculates total number of distinct days studied
 */
export function calculateTotalDaysStudied(activity) {
  if (!activity) return 0;
  return Object.values(activity).filter(count => count > 0).length;
}

/**
 * Calculates total number of study activities / sessions logged
 */
export function calculateTotalSessions(activity) {
  if (!activity) return 0;
  return Object.values(activity).reduce((sum, count) => sum + (Number(count) || 0), 0);
}
