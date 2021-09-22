const addToLocalStorage = (id) => {
    const exist = localStorage.getItem('chart');
    let chart = {};
    if (!exist) {
        chart[id] = 1;
    }
    else {
        chart = JSON.parse(exist);
        if (chart[id]) {
            const newCount = chart[id] + 1;
            chart[id] = newCount;
        }
        else {
            chart[id] = 1;
        }

    }
    const srtChart = JSON.stringify(chart)
    localStorage.setItem('chart', srtChart)
};
const removeDb = id => {
    const exist = localStorage.getItem('chart');
    if (exist) {
        const srtChart = JSON.parse(exist);
        delete srtChart[id];
        const chart = JSON.stringify(srtChart);
        localStorage.setItem('chart', chart)
    }
}
export { addToLocalStorage, removeDb };