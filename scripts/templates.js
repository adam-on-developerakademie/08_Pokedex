function filterButtons() {return `
                    <p class="normal filterButton" onclick="findTyp('normal')">${filterArray.normal?filterArray.normal:''} Normal</p>
                    <p class="fire filterButton" onclick="findTyp('fire')">${filterArray.fire?filterArray.fire:''} Fire</p>
                    <p class="fighting filterButton" onclick="findTyp('fighting')">${filterArray.fighting?filterArray.fighting:''} Fighting</p>
                    <p class="water filterButton" onclick="findTyp('water')">${filterArray.water?filterArray.water:''} Water</p>
                    <p class="flying filterButton" onclick="findTyp('flying')">${filterArray.flying?filterArray.flying:''} Flying</p>
                    <p class="grass filterButton" onclick="findTyp('grass')">${filterArray.grass?filterArray.grass:''} Grass</p>
                    <p class="poison filterButton" onclick="findTyp('poison')">${filterArray.poiso?filterArray.poison:''} Poison</p>
                    <p class="electric filterButton" onclick="findTyp('electric')">${filterArray.electric?filterArray.electric:''} Electric</p>
                    <p class="ground filterButton" onclick="findTyp('ground')">${filterArray.ground?filterArray.ground:''} Ground</p>
                    <p class="psychic filterButton" onclick="findTyp('psychic')">${filterArray.psychic?filterArray.psychic:''} Psychic</p>
                    <p class="rock filterButton" onclick="findTyp('rock')">${filterArray.rock?filterArray.rock:''} Rock</p>
                    <p class="ice filterButton" onclick="findTyp('ice')">${filterArray.ice?filterArray.ice:''} Ice</p>
                    <p class="bug filterButton" onclick="findTyp('bug')">${filterArray.bug?filterArray.bug:''} Bug</p>
                    <p class="dragon filterButton" onclick="findTyp('dragon')">${filterArray.dragon?filterArray.dragon:''} Dragon</p>
                    <p class="ghost filterButton" onclick="findTyp('ghost')">${filterArray.ghost?filterArray.ghost:''} Ghost</p>
                    <p class="dark filterButton" onclick="findTyp('dark')">${filterArray.dark?filterArray.dark:''} Dark</p>
                    <p class="steel filterButton" onclick="findTyp('steel')">${filterArray.steel?filterArray.steel:''} Steel</p>
                    <p class="fairy filterButton" onclick="findTyp('fairy')">${filterArray.fairy?filterArray.fairy:''} Fairy</p>
`
}