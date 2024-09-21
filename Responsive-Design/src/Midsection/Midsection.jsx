import React from 'react';
const config ={};
import useHttp from '../hooks/useHttp';
import Midsec from './Midsec';
import Error from '../Components/Error'
export default function Midsection(){

    const {
        data: projects,
        isLoading,
        error
    } = useHttp('http://localhost:4000/projects',config,[]);


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
                        />
                        
                        )
                    
                })
            
            }
        </section>
    );
}