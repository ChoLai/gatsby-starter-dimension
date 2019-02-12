import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/resume.jpg'
import pic02 from '../images/edf_logo.jpg'
import pic03 from '../images/ut_logo.png'
import pic04 from '../images/nju_logo.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
            <p className="project">
              <span className="image project"><img src={pic02} alt="" /></span>
              <span>Texas LMI Energy Efficiency Solutions (2018-2019)</span>
              <br/>
              <span>Supervisor: Sarah Ryan</span>
              <br/>
              <br/>
              <p>We collaborated with the Texas Energy Poverty Research Institute (TEPRI) and the Lyndon B. Johnson School of Public Affairs to collect and analyze energy usage data. This provided policy and market-based energy efficiency solutions for Texas low-moderate income (LMI) households.</p>
            </p>
            <p className="project">
              <span className="image project"><img src={pic03} alt="" /></span>
              <span>Macroscale modeling linking energy and economics (2016-2018)</span>
              <br/>
              <span>Supervisor: Carey King, PhD</span>
              <br/>
              <br/>
              <p>The goal of the study was to further develop a model that links biophysical and economic fundamentals within a cohesive framework. Based on the “HANDY” biophysical model and the Goodwin economic model, a merged model was developed to simulate the dynamics of an integrated system associating natural resources and economics.<br/>Interactive UI: TO BE UPDATED</p>
              <span>Do Google search trends allow us to better understand residential adoption of solar? (2017-2018)</span>
              <br/>
              <span>Group members: Ghida Ismail, Ryan Williams</span>
              <br/>
              <span>Supervisor: Varun Rai, PhD</span>
              <br/>
              <br/>
              <p>Based on the analysis of Google Trends data, PV installation data, energy usage data as well as demographic data, new predictive models were built and tested as a step to study whether internet or online social media activity will improve the prediction of the PV diffusion at different geographic and time scales in the United States.</p>
            </p>
            <p className="project">
              <span className="image project"><img src={pic04} alt="" /></span>
              <span>Bachelor’s Thesis: The Climatic Effects of Tropospheric Ozone in summer around China (2015-2016)</span>
              <br/>
              <span>Supervisor: Shu Li, PhD</span>
              <br/>
              <br/>
              <span>In the study, climate data for China during the summers of 1850 and 2001-2010 was used in Regional Climate Model 4.0 (RegCM4) to simulate the distribution and variation of tropospheric ozone and other related factors. The modelling products as well as the observational data revealed the variation of ozone and its impacts on the radiation, temperature, wind fields and precipitation in summer after Industrial Revolution around China.</span>
            </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:qylai@utexas.edu">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/qylai" target="_blank" className="icon fa-linkedin-square"><span className="label">LinkedIn</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main