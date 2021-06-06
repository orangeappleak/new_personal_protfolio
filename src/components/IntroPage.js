import React from 'react';
import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import svg from './intro-svg.svg';

import '../stylesheets/IntroPage.css';

var IntroPage = () => (
        <div id="intro-page">
                <ParallaxLayer style={{
                        position: 'relative',
                        height: '100vh',
                        alignItems: 'center'
                }} speed={1.2} offset={0}>
                        <div id="intro">
                                <div className="animate" id="intro-heading">
                                        <h1>Bringing Designs to Life</h1>
                                        <h2>My name is A Karthik and I love building beautiful and minimal designs that are both stunning as well as eye catching</h2>
                                        <div id="social">
                                                <h2>Find me here:</h2>
                                                <div id="social-icons">
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48bGluZWFyR3JhZGllbnQgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCAtMS45ODIgLTEuODQ0IDAgLTEzMi41MjIgLTUxLjA3NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTM3LjEwNiIgeDI9Ii0yNi41NTUiIHkxPSItNzIuNzA1IiB5Mj0iLTg0LjA0NyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmQ1Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2ZmNTQzZSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M4MzdhYiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMS41IDEuNjMzYy0xLjg4NiAxLjk1OS0xLjUgNC4wNC0xLjUgMTAuMzYyIDAgNS4yNS0uOTE2IDEwLjUxMyAzLjg3OCAxMS43NTIgMS40OTcuMzg1IDE0Ljc2MS4zODUgMTYuMjU2LS4wMDIgMS45OTYtLjUxNSAzLjYyLTIuMTM0IDMuODQyLTQuOTU3LjAzMS0uMzk0LjAzMS0xMy4xODUtLjAwMS0xMy41ODctLjIzNi0zLjAwNy0yLjA4Ny00Ljc0LTQuNTI2LTUuMDkxLS41NTktLjA4MS0uNjcxLS4xMDUtMy41MzktLjExLTEwLjE3My4wMDUtMTIuNDAzLS40NDgtMTQuNDEgMS42MzN6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIgZGF0YS1vcmlnaW5hbD0idXJsKCNTVkdJRF8xXykiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMS45OTggMy4xMzljLTMuNjMxIDAtNy4wNzktLjMyMy04LjM5NiAzLjA1Ny0uNTQ0IDEuMzk2LS40NjUgMy4yMDktLjQ2NSA1LjgwNSAwIDIuMjc4LS4wNzMgNC40MTkuNDY1IDUuODA0IDEuMzE0IDMuMzgyIDQuNzkgMy4wNTggOC4zOTQgMy4wNTggMy40NzcgMCA3LjA2Mi4zNjIgOC4zOTUtMy4wNTguNTQ1LTEuNDEuNDY1LTMuMTk2LjQ2NS01LjgwNCAwLTMuNDYyLjE5MS01LjY5Ny0xLjQ4OC03LjM3NS0xLjctMS43LTMuOTk5LTEuNDg3LTcuMzc0LTEuNDg3em0tLjc5NCAxLjU5N2M3LjU3NC0uMDEyIDguNTM4LS44NTQgOC4wMDYgMTAuODQzLS4xODkgNC4xMzctMy4zMzkgMy42ODMtNy4yMTEgMy42ODMtNy4wNiAwLTcuMjYzLS4yMDItNy4yNjMtNy4yNjUgMC03LjE0NS41Ni03LjI1NyA2LjQ2OC03LjI2M3ptNS41MjQgMS40NzFjLS41ODcgMC0xLjA2My40NzYtMS4wNjMgMS4wNjNzLjQ3NiAxLjA2MyAxLjA2MyAxLjA2MyAxLjA2My0uNDc2IDEuMDYzLTEuMDYzLS40NzYtMS4wNjMtMS4wNjMtMS4wNjN6bS00LjczIDEuMjQzYy0yLjUxMyAwLTQuNTUgMi4wMzgtNC41NSA0LjU1MXMyLjAzNyA0LjU1IDQuNTUgNC41NSA0LjU0OS0yLjAzNyA0LjU0OS00LjU1LTIuMDM2LTQuNTUxLTQuNTQ5LTQuNTUxem0wIDEuNTk3YzMuOTA1IDAgMy45MSA1LjkwOCAwIDUuOTA4LTMuOTA0IDAtMy45MS01LjkwOCAwLTUuOTA4eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNiAzMmgtMjBjLTMuMzE0IDAtNi0yLjY4Ni02LTZ2LTIwYzAtMy4zMTQgMi42ODYtNiA2LTZoMjBjMy4zMTQgMCA2IDIuNjg2IDYgNnYyMGMwIDMuMzE0LTIuNjg2IDYtNiA2eiIgZmlsbD0iIzE4NTg1ZSIgZGF0YS1vcmlnaW5hbD0iI2UzZjhmYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE2IDguMzMzYy00LjQyIDAtOCAzLjUyLTggNy44NjEgMCAzLjQ3NCAyLjI5MiA2LjQyIDUuNDcgNy40NTguNC4wNzQuNTQ3LS4xNjkuNTQ3LS4zNzggMC0uMTg3LS4wMDctLjY4MS0uMDEtMS4zMzYtMi4yMjUuNDc0LTIuNjk1LTEuMDU1LTIuNjk1LTEuMDU1LS4zNjQtLjkwNy0uODktMS4xNS0uODktMS4xNS0uNzI1LS40ODcuMDU2LS40NzguMDU2LS40NzguODAzLjA1NSAxLjIyNS44MSAxLjIyNS44MS43MTMgMS4yMDIgMS44NzMuODU1IDIuMzMuNjU0LjA3Mi0uNTA4LjI3OC0uODU1LjUwNy0xLjA1MS0xLjc3Ny0uMTk3LTMuNjQ0LS44NzMtMy42NDQtMy44ODUgMC0uODU4LjMxLTEuNTU5LjgyMy0yLjEwOS0uMDktLjE5OC0uMzYtLjk5OC4wNy0yLjA4MSAwIDAgLjY3LS4yMTEgMi4yLjgwNi42NC0uMTc1IDEuMzItLjI2MSAyLS4yNjUuNjguMDA0IDEuMzYuMDkgMiAuMjY1IDEuNTItMS4wMTcgMi4xOS0uODA2IDIuMTktLjgwNi40MyAxLjA4My4xNiAxLjg4Mi4wOCAyLjA4MS41MS41NS44MiAxLjI1MS44MiAyLjEwOSAwIDMuMDItMS44NyAzLjY4NS0zLjY1IDMuODc4LjI4LjIzNi41NC43MTguNTQgMS40NTQgMCAxLjA1Mi0uMDEgMS44OTctLjAxIDIuMTUzIDAgLjIwNi4xNC40NTIuNTUuMzczIDMuMjAxLTEuMDMgNS40OTEtMy45NzggNS40OTEtNy40NDYgMC00LjM0Mi0zLjU4Mi03Ljg2Mi04LTcuODYyeiIgZmlsbD0iIzI2YzZkYSIgZGF0YS1vcmlnaW5hbD0iIzI2YzZkYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNiAzMmgtMjBjLTMuMzE0IDAtNi0yLjY4Ni02LTZ2LTIwYzAtMy4zMTQgMi42ODYtNiA2LTZoMjBjMy4zMTQgMCA2IDIuNjg2IDYgNnYyMGMwIDMuMzE0LTIuNjg2IDYtNiA2eiIgZmlsbD0iI2UzZjhmYSIgZGF0YS1vcmlnaW5hbD0iI2UzZjhmYSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEwLjM4NyAyMi4xMzFoOS41MDZsLS40NTQtMS40NyAxLjA4Ni45MzIuOTk1Ljg5MiAxLjgxMyAxLjUxNXYtMTQuMzVjLS4wNDUtLjg5Mi0uODEzLTEuNjUtMS43NjUtMS42NWwtMTEuMTc4LjAwMmMtLjk1MSAwLTEuNzIzLjc1OS0xLjcyMyAxLjY1MXYxMC44MjdjMCAuOTQxLjc3IDEuNjUxIDEuNzIgMS42NTF6bTcuMDMyLTEwLjM0Mi0uMDIyLjAwOC4wMDgtLjAwOHptLTUuMDg4Ljg0NmMxLjIyMi0uODg5IDIuMzU0LS44NDcgMi4zNTQtLjg0N2wuMDkxLjA5Yy0xLjQ5NS4zNTctMi4xNzQgMS4wMjUtMi4xNzQgMS4wMjVzLjE4MS0uMDg5LjQ5OC0uMjI0YzIuMDE0LS43OTIgNC4yMTMtLjczNCA2LjI1LjI2OCAwIDAtLjY3OS0uNjI1LTIuMDgzLTEuMDI1bC4xMjUtLjEyMmMuMTk0LjAwMSAxLjIyMS4wMzcgMi4zMi44NCAwIDAgMS4yMjkgMi4xIDEuMjI5IDQuNjgtLjA0MS0uMDQ5LS43NjMgMS4xMTEtMi42MjEgMS4xNTEgMCAwLS4zMTUtLjM1Ni0uNTM4LS42NjcgMS4wODctLjMxMiAxLjQ5My0uOTM2IDEuNDkzLS45MzYtLjM1Ny4yMjUtLjY4Mi4zNTgtLjk0Ni40OTEtLjQwNi4xNzktLjgxMy4yNjctMS4yMTkuMzU3LTEuOTIzLjMxMi0zLjAwMi0uMjEtNC4wMjItLjYyNGwtLjM0OS0uMTc3cy40MDYuNjI0IDEuNDQ5LjkzNmMtLjI3NC4zMTMtLjU0NS42NjgtLjU0NS42NjgtMS44NTctLjA0NC0yLjUzNS0xLjIwNC0yLjUzNS0xLjIwNC4wMDEtMi41ODQgMS4yMjMtNC42OCAxLjIyMy00LjY4eiIgZmlsbD0iIzI2YzZkYSIgZGF0YS1vcmlnaW5hbD0iIzI2YzZkYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzhjZTFlYiI+PHBhdGggZD0ibTE3LjUzOSAxNi41MTRjLjQ3NCAwIC44Ni0uNC44Ni0uODkzIDAtLjQ5LS4zODQtLjg5LS44Ni0uODl2LjAwMmMtLjQ3MiAwLS44NTkuMzk5LS44Ni44OTIgMCAuNDg5LjM4Ni44ODkuODYuODg5eiIgZmlsbD0iIzhjZTFlYiIgZGF0YS1vcmlnaW5hbD0iIzhjZTFlYiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNC40NiAxNi41MTRjLjQ3NCAwIC44Ni0uNC44Ni0uODkzIDAtLjQ5LS4zODMtLjg5LS44NTctLjg5bC0uMDAzLjAwMmMtLjQ3NCAwLS44Ni4zOTktLjg2Ljg5MiAwIC40ODkuMzg2Ljg4OS44Ni44ODl6IiBmaWxsPSIjOGNlMWViIiBkYXRhLW9yaWdpbmFsPSIjOGNlMWViIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM4MiAzODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0zNDcuNDQ1LDBIMzQuNTU1QzE1LjQ3MSwwLDAsMTUuNDcxLDAsMzQuNTU1djMxMi44ODlDMCwzNjYuNTI5LDE1LjQ3MSwzODIsMzQuNTU1LDM4MmgzMTIuODg5ICBDMzY2LjUyOSwzODIsMzgyLDM2Ni41MjksMzgyLDM0Ny40NDRWMzQuNTU1QzM4MiwxNS40NzEsMzY2LjUyOSwwLDM0Ny40NDUsMHogTTExOC4yMDcsMzI5Ljg0NGMwLDUuNTU0LTQuNTAyLDEwLjA1Ni0xMC4wNTYsMTAuMDU2ICBINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYgIGM1LjU1NCwwLDEwLjA1Niw0LjUwMiwxMC4wNTYsMTAuMDU2VjMyOS44NDR6IE04Ni43NDgsMTIzLjQzMmMtMjIuNDU5LDAtNDAuNjY2LTE4LjIwNy00MC42NjYtNDAuNjY2UzY0LjI4OSw0Mi4xLDg2Ljc0OCw0Mi4xICBzNDAuNjY2LDE4LjIwNyw0MC42NjYsNDAuNjY2UzEwOS4yMDgsMTIzLjQzMiw4Ni43NDgsMTIzLjQzMnogTTM0MS45MSwzMzAuNjU0YzAsNS4xMDYtNC4xNCw5LjI0Ni05LjI0Niw5LjI0NkgyODYuNzMgIGMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OSAgYzAsNS4xMDYtNC4xMzksOS4yNDYtOS4yNDYsOS4yNDZoLTQ0LjQyNmMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2VjE0OS41OTNjMC01LjEwNiw0LjE0LTkuMjQ2LDkuMjQ2LTkuMjQ2aDQ0LjQyNiAgYzUuMTA2LDAsOS4yNDYsNC4xNCw5LjI0Niw5LjI0NnYxNS42NTVjMTAuNDk3LTE1Ljc1MywyNi4wOTctMjcuOTEyLDU5LjMxMi0yNy45MTJjNzMuNTUyLDAsNzMuMTMxLDY4LjcxNiw3My4xMzEsMTA2LjQ3MiAgTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIgZmlsbD0iIzAwNzdiNyIgZGF0YS1vcmlnaW5hbD0iIzAwNzdiNyI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
                                                </div>
                                        </div>
                                </div>
                                <ParallaxLayer style={{
                                        position: 'relative',margin: '20px',height: 'auto',width: '100%',overflow: 'hidden'
                                        
                                        }} offset={0} speed={2} id="intro-img" className="intro-img">
                                        <img className="animate" width="100%" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                                </ParallaxLayer>
                        </div>
                </ParallaxLayer>
        </div>
)

export default IntroPage;
