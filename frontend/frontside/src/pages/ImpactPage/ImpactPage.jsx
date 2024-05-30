import React from 'react';
import CommentSection from '../../components/CommentSection/CommentSection';

import './ImpactPage.css';

const ImpactPage = ({loggedIn, user}) => {

  //text to display on the page
  const text = {
    intro: `The greenhouse effect is essential to life on Earth, 
    but human-made emissions in the atmosphere are trapping and slowing heat loss to space.`,
    sun: `While the Sun has played a role in past climate changes, 
    the evidence shows the current warming cannot be explained by the Sun.`,
    gas: {
      carbon: [`Carbon Dioxide`, `A vital component of the atmosphere, carbon dioxide (CO2) 
      is released through natural processes (like volcanic eruptions) 
      and through human activities, such as burning fossil fuels and deforestation.`],
      methane: [`Methane`, `Like many atmospheric gases, methane comes from both 
      natural and human-caused sources. Methane comes from plant-matter breakdown 
      in wetlands and is also released from landfills and rice farming. Livestock 
      animals emit methane from their digestion and manure. Leaks from fossil fuel 
      production and transportation are another major source of methane, and natural 
      gas is 70% to 90% methane.`],
      nitrousOxide: [`Nitrous Oxide`, `A potent greenhouse gas produced by farming practices, 
      nitrous oxide is released during commercial and organic fertilizer production and use. 
      Nitrous oxide also comes from burning fossil fuels and burning vegetation and has 
      increased by 18% in the last 100 years.`],
      cfcs: [`Chlorofluorocarbons (CFCs)`, `These chemical compounds do not exist 
      in nature – they are entirely of industrial origin. They were used as refrigerants, 
      solvents (a substance that dissolves others), and spray can propellants.`]
    },
    outro: `"Since systematic scientific assessments began in the 1970s, the influence 
    of human activity on the warming of the climate system has evolved from theory 
    to established fact."`
  }

  return (
   <>
    <section className='impact-section'>
      
     <article className='impact-article'>

    {/* sun image inside sun wrapper */}
    <div className="sun-wrapper">
      <div className="description">{text.intro}</div>
      <div className="description">{text.sun}</div>

    </div>
      {/* display gases array */}
      <div className="gases">
        {Object.values(text.gas).map((item, index) => (
          <div key={`gas-${index}`}>
            <span>{item[0]}</span><br /><span>{item[1]}</span>
          </div>
        ))}
      </div>

      <div className="description">{text.outro}</div>


     </article>

    </section>
    {/* comment section */}
    <CommentSection user={user} loggedIn={loggedIn}/>
   </>
  )
}

export default ImpactPage;