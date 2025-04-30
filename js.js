function toggleTheme(value) {
    var sheets = document.getElementsByTagName('link');
    if (sheets.length > 0) {
        sheets[0].setAttribute('href', value);
    }
}
