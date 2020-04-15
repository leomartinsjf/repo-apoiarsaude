import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'

class AgendaIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Agenda</div>
          <div className="wrapper">
            <h2 className="section-headline">Horários</h2>
            <iframe src="https://calendar.google.com/calendar/embed?src=universo.edu.br_la1q8thbrhn8fnktn9n6mqmbn8%40group.calendar.google.com&ctz=America%2FSao_Paulo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AgendaIndex


