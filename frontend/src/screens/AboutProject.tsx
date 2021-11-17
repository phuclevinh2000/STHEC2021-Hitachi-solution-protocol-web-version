import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const AboutProject = () => {
  return (
    <Row className='p-4'>
      <Col md={8}>
        <h4 className='text-warning'>HITACHI ENERGY</h4>
        <h3>
          The role of ecological and social values in the choice of technology
          solutions.
        </h3>
        <p>
          The ecological and social values affect the decisions and choices that
          has been made. Following questions help to consider their impact on
          technological decisions:
        </p>
        <p>
          What kind of targets and legislation should be implemented for
          achieving the goals for cleaner carbon neutral future?
        </p>
        <p>
          How should ecological aspects be taken into consideration in technical
          evaluation?
        </p>
        <p>
          How should ecological values be taken into consideration in
          supplying/purchasing technology solutions?
        </p>
        <p>
          How will the public image focus on ecological and social values impact
          on the selection criteria in the future?
        </p>
        <p>
          What kind of information companies/consumers are requiring for
          ecological and social decision making in the future?
        </p>
        <p>
          What are the main ecological and social values for future generations?
        </p>
        <p>What are the other driving values for future generations? </p>
        <p>
          <strong className='text-danger'>Call to action</strong>: With the help
          of questions above, please define the changes in the operating
          environment and their impact on the company’s operations.
        </p>
      </Col>
      <Col md={4}>
        <Image src='/images/aboutus/renew.png' alt='renew' />
      </Col>
      <Col md={5} className='mt-5'>
        <h4 className='text-success'>Solution by our group</h4>
        <p>
          After discussion with mentors, we had define five future value which
          is sustainable resources, energy efficiency and reliability,
          transparency in process and material selection, a 'bus' system
          protocol for measurement as well as eMobility
        </p>
        <p>
          Those values are defined base on the problem we are facing which is
          lack of common platform to agree and verify measurement from all the
          stakeholders
        </p>
        <p>
          By that problem, we have decided the solution will be an app that
          would provide real-time information to track the environmental
          performance of companies.
        </p>
        <p>
          <strong className='text-danger'>Solution: </strong> An app that would
          provide real-time information to track the environmental performance
          of companies.
        </p>
      </Col>
      <Col md={7} className='mt-5'>
        <Image
          src='/images/aboutus/presentation.png'
          alt='presentation'
          fluid
          rounded
        />
      </Col>
      <Col md={12} className='mt-5'>
        <h5 className="d-flex justify-content-center">
          This web application is developing as a prototype by Phuc Le.
          Technology using in this web application contain:
        </h5>
        <div className="d-flex justify-content-center">
          <ul>
            <p>Frontend: </p>
            <li>React JS</li>
            <li>Typescript</li>
            <li>React-router-dom</li>
            <li>React-bootstrap</li>
            <li>React-bootwatch</li>
            <li>Font-awesome</li>
            <li>Redux</li>
            <li>Redux-thunk</li>
          </ul>
          <ul>
            <p>Backend: </p>
            <li>Node JS</li>
            <li>Typescript</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default AboutProject;
