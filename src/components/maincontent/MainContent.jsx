import React from 'react';
import Main from '../../images/main.jpg';


function MainContent() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-lg-5">
              <h3 className="text-center mt-5">Bandhan.com</h3>
              <p className='align-justify'>Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety disorders, trouble sleeping, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and vomiting. </p>
              <p className='align-justify'>Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety disorders, trouble sleeping, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and vomiting. </p>
              <p className='align-justify'>Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety disorders, trouble sleeping, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and vomiting. </p>
            </div>
            <div className="col-lg-7">
                <img src={Main} alt='Main' className='mainContent' />
            </div>
        </div>
    </div>
    </>
  );
}

export default MainContent;
