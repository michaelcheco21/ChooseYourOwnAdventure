// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            background_image: "blue_redDoors.jpg",
            message: "There are 2 doors",
            choices: [
                {
                    text: "Enter the left door",
                    nextLevel: "LeftDoor",
                },

                {
                    text: "Enter the right door",
                    nextLevel: "RightDoor",
                },
            ]
        },

        LeftDoor: {
            background_image: "choosePokemon.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "There are 3 Pokeballs in front of you!",
            choices: [
                {
                    text: "1st Pokeball",
                    nextLevel: "PokemonBattle1",
                },
                
                {
                    text: "2nd Pokeball",
                    nextLevel: "PokemonBattle2",
                },
                
                {
                    text: "3rd Pokeball",
                    nextLevel: "PokemonBattle3",
                }
            ]
        },

        RightDoor: {
            message: "There is a hole in the ground",
            choices: [
                {
                    text: "Go in it",
                    nextLevel: "Drown",
                },
                
                {
                    text: "Walk over it",
                    nextLevel: "AnotherDoor",
                },
            ]
        },
        
        PokemonBattle1: {
            message: "A trainer has challenged you to battle!",
            choices: [
                {
                    text:"Battle!",
                    nextLevel: "Battle1Result"
                }
            ]
        },
        
        PokemonBattle2: {
            message: "A trainer has challenged you to battle!",
            choices: [
                {
                    text:"Battle!",
                    nextLevel: "Battle2Result"
                }
            ]
        },
        
        PokemonBattle3: {
            message: "A trainer has challenged you to battle!",
            choices: [
                {
                    text:"Battle!",
                    nextLevel: "Battle3Result"
                }
            ]
        },
        
        Battle1Result: {
            background_image: "garchomp.gif",
            message: "Garchomp is really strong. You Won!",
            choices: [
                {
                    text:"Start Over",
                    nextLevel: "start"
                }
                
            ]
        },
        
        Battle2Result: {
            background_image: "alolanMuk.gif",
            message: "Muk didn't like you. He swallowed you whole!!",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start"
                }
            ]
        },
        
        Battle3Result: {
            background_image: "plusle.gif",
            message: "Plusle is far too weak. You lost!!",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start"
                }
            ]
        },
        
        Drown: {
            message: "Oops. You dropped into a pit and drowned!",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start"
                }
            ]
        },
        
        AnotherDoor: {
            message: "You find another door",
            choices: [
                {
                    text:"Go through it",
                    nextLevel:"Sword"
                }
            ]
        },
        
        Sword: {
            message: "Woah a sword!",
            choices: [
                {
                    text:"Pick it up and continue forth",
                    nextLevel:"ThreeKnights"
                }
            ]
        },
        
        ThreeKnights: {
            message: "A trio of knights challenge you!!",
            choices: [
                {
                    text:"Fight them",
                    nextLevel:"YouLost"
                },
                
                {
                    text:"Propose a truce",
                    nextLevel:"HappyEnding"
                }
                
            ]
            
        },
        
        YouLost: {
            message: "You lost! It was 3 vs 1 after all!!",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start"
                }
            ]
        },
        
        HappyEnding: {
            message: "The three knights agreed and the four of you went on to have awsome adventures!!",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start"
                }
            ]
        }
        

    }
};
