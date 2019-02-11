import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/resume.jpg'
import pic02 from '../images/edf_logo.jpg'
import pic03 from '../images/ut_logo.jpg'
import pic04 from '../images/nju_logo.jpg'

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
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Texas LMI Energy Efficiency Solutions (2018-2019)
          <p>Supervisor: Sarah Ryan
          <p>We collaborated with the Texas Energy Poverty Research Institute (TEPRI) and the Lyndon B. Johnson School of Public Affairs to collect and analyze energy usage data. This provided policy and market-based energy efficiency solutions for Texas low-moderate income (LMI) households.

          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Macroscale modeling linking energy and economics (2016-2018)
          <p>Supervisor: Carey King, PhD
          <p>The goal of the study was to further develop a model that links biophysical and economic fundamentals within a cohesive framework. Based on the “HANDY” biophysical model and the Goodwin economic model, a merged model was developed to simulate the dynamics of an integrated system associating natural resources and economics.
          <p>Interactive UI: TO BE UPDATED
          <p>
          <p>Do Google search trends allow us to better understand residential adoption of solar? (2017-2018)
          <p>Group members: Ghida Ismail, Ryan Williams
          <p>Supervisor: Varun Rai, PhD
          <p>Based on the analysis of Google Trends data, PV installation data, energy usage data as well as demographic data, new predictive models were built and tested as a step to study whether internet or online social media activity will improve the prediction of the PV diffusion at different geographic and time scales in the United States.  
          <span className="image main"><img src={pic04} alt="" /></span>
          <p>Bachelor’s Thesis: The Climatic Effects of Tropospheric Ozone in summer around China (2015-2016)
          <p>Supervisor: Shu Li, PhD
          <p>In the study, climate data for China during the summers of 1850 and 2001-2010 was used in Regional Climate Model 4.0 (RegCM4) to simulate the distribution and variation of tropospheric ozone and other related factors. The modelling products as well as the observational data revealed the variation of ozone and its impacts on the radiation, temperature, wind fields and precipitation in summer after Industrial Revolution around China.
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