import React from 'react';
import useHttp from '../hooks/useHttp';
import Midsec from './Midsec';
import Error from '../Components/Error'
const config ={};
export default function Midsection(){ 
    const {
        data: projects,
        isLoading,
        error
    } = useHttp('https://responsive-design-1backend.onrender.com/projects',config,[]);


    if (isLoading) {
        return <p className="center">Fetching Projects...</p>;
      }
    
      if (error) {
        return <Error title="Failed to fetch projects" message={error} />;
      }
    return(
        <section id="sec" className='middle-sec'>
            {
                
                    projects.map((v,i)=>{
                    console.log(v.title);
                    
                        return(
                            <Midsec key={i} 
                        title={v.title} 
                        link={v.link}
                        linktext={v.linktext}
                        imagealt={i.imagealt}
                        image={v.image}
                        paragraph={v.paragraph}
                        githubrepo={v.githubrepo}
                        />
                        
                        )
                    
                })
            
            }
        </section>
    );
}