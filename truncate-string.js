// This function truncate some number of letters and replace the extra letters with '...'

function truncateString(str, num) {
  // Clear out that junk in your trunk

  if (num < 1) return "";
  else if (num >= str.length) return str;
  else if (num < 4) {
    str = str.substring(0, num) + '...';
  } else str = str.substring(0, num - 3) + '...';

  return str;
}
