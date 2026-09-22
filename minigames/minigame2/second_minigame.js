import { Player } from 'player.js'
const canvas = document.getElementById('second_minigame')
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext('2d')
const player = new Player(100,100,30,50)
player.draw(ctx)

