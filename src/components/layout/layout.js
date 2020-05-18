import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BaseContainer from '../../containers/baseContainer/baseContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestApiData } from '../../store/actions/actions';
import './layout.scss';

const Layout = (props) => {
    useEffect(() => {
        props.requestApiData();
      }, [])

    return (
        <React.Fragment>
            <Header />
            <BaseContainer />
            <Footer />
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(null, mapDispatchToProps)(Layout);