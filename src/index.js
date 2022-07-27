import 'alpinejs'

import baseData from './baseData.js'

const appname = 'thisoldruin'

export const data = () => ({
    init() {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let gridSize = (this.gridSize * 2) + 1
        let rows = [...Array(gridSize).keys()]
        this.grid = rows.map((row_index) => (
            [...Array(gridSize).keys()].map((col_index) => ({
                index: `${row_index}.${col_index}`,
                explored: false, // whether we have explored the node: if not it shows no info
                features: [], // what is has: might be a forest, ore deposit, radioactivity, leyline etc
            }))
        ))
        this.$watch('selected_index', () => {
            this.selected_grid = this.getGrid(this.selected_index)
        })
    },
    baseData: Object.assign({}, baseData),
    gameData: {},
    statData: {},
    gridSize: 5, // this is the size 

    // the grid is just arn array of arrays with the index ( y . x position ) 
    grid: [],
    // this turns into the index 
    selected_index: false,
    selected_grid: false,

    // a list containing data about the building on that index: one building per grid position
    // we match buildings to grid positions using their index
    buildings: {},


    // resources used to build and explore
    energy: 0,
    mud: 0,
    bricks: 0,
    slag: 0,
    iron: 0,
    getGrid(index) {
        // get grid data from the array based on its index
        let grid = false
        this.grid.forEach((row) => {
            row.forEach((col) => {
                if (col.index == index) {
                    grid = col
                }
            })
        })
        return grid
    },
    load() {
        var loadeddata = localStorage.getItem('thisoldruin')
        if (!loadeddata || loadeddata == null) return console.warn('Loading Failed')
        let text = LZString.decompressFromBase64(loadeddata)
        if (!text) return console.warn('Loading Failed')
        const l = JSON.parse(text)
        if ('gameData' in l) {
            this.gameData = Object.assign({}, l.gameData)
        }
        if ('statData' in l) {
            this.statData = Object.assign({}, l.statData)
        }
    },
    save() {
        let saveddata = {
            version: version_number,
            currencies: JSON.parse(JSON.stringify(currencies)),
        }
        let text = JSON.stringify(saveddata)
        let compressed = LZString.compressToBase64(text)
        localStorage.setItem(`thisoldruin`, compressed)
    },

    interval: false,
    baseTickrate: 100,
    currentTick: 0,


    startLoop() {
        var self = this;
        self.stopLoop();
        this.interval = setInterval(function () {
            self.currentTick++;

            elem.dispatchEvent(new Event('onTenthSecond'));

            self.tickAction()

            if (self.currentTick % 10 === 0) {
                elem.dispatchEvent(new Event('onTenthSecond'));
            }
            if (self.currentTick % 600 === 0) {
                elem.dispatchEvent(new Event('onMinute'));
                // save every minute
                self.save()
            }
            if (self.currentTick % 3000 === 0 || self.currentTick > 3000) {
                elem.dispatchEvent(new Event('onFiveMinute'));
                self.currentTick = 0;
            }
        }, self.baseTickrate);
    },
    stopLoop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = false;
        }
    },
    // subscribe to specific tick events here
    onTenthSecond(func) { element.addEventListener("onTenthSecond", func) },
    onSecond(func) { element.addEventListener("onSecond", func) },
    onMinute(func) { element.addEventListener("onMinute", func) },
    onFiveMinute(func) { element.addEventListener("onFiveMinute", func) },
    // perform all operations to reset the game state
    resetTime() {
        this.currentTick = 0;
    },
    queue: [],
    queueAction(action_id, multiplier) {
        // check the action exists
        if (!action_id in baseData.actions) { return }
        let action = Object.assign({}, baseData.actions[action_id])
        // set up some metadata on the action for display
        action.baseCost
        this.queue.push(action)
    },
    calculateProgress(action) {


        // progressPerDay: { energy: 1 }
        // baseCost: { energy: 5 }
    },
    tickAction() {
        if (this.queue.length == 0) return
        let a = this.queue[0]
        if (!a) return
        if (a.progress <= 0) {
            a.onComplete()
            let removed = this.queue.shift()
            console.log('Completed Action:', removed)
            return;
        }
        // go through all the costs to both reduce resources and trhen calculate remaining progress
        for (const key in a.progressPerDay) {
            if ((key in this) && this[key] >= a.progressPerDay[key]) {
                this[key] -= a.progressPerDay[key]
            }
        }


    }
})

import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('app', data)

Alpine.start()
