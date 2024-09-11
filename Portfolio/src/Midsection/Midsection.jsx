import React from 'react';
import proj1 from '../Assets/proj1.png';
import proj2 from '../Assets/proj2.png';
import proj3 from '../Assets/proj3.png';
import sprint from '../Assets/sprint.png';
export default function Midsection(){

    return(
        <>
        <section className='middle-sec'>
        <div className='projCon'>
            <div class='projectBoxes'><b>User Interface</b>
            
            <button><a href="https://naughty-poincare-17bc38.netlify.app/">Sweet EETS Bakery</a></button>
            
            <img src={proj1} alt="Sweet_EEts_Bakery-Project" />
            <p>
                A project for a bakery website called sweet eets which describes
                their menu items and secret recipes 
            </p>

                </div>
                <div class='projectBoxes'><b>Advanced CSS Selectors</b>
            
            <button> <a href="https://github.com/extrude575757/Git-for-Web-Development-Project">Git for Web Development</a></button>
            
            <img src={proj2} alt="Git_For_Web_Dev" />
            <p>
                A project on CSS Selectors and how to use them
            </p>
        </div>
        <div class='projectBoxes'><b>Intro to Css</b>
            
            <button> <a href="https://focused-hugle-a34bbe.netlify.app/">National Parks Project</a></button>
            
            <img src={proj3} alt="National_Forrest_Website" />
            <p>
                Intro to CSS using a national parks website owned by the government. 
            </p>
        </div>
        <div class='projectBoxes'><b>Sprint Project</b>
            
            <button><a href="https://frosty-meitner-11b18e.netlify.app/">Sprint Project</a></button>
            
            <img src={sprint} alt="Sprint_at-Lambda_Site" />
            <p>
                Sprint project at lambda with a website for lambda studnets.
            </p>
        </div>

            </div>
            </section>
        </>
    );
}