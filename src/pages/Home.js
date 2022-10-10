import React, {useContext, useEffect} from 'react'
import {Context} from "../index";
import {fetchSection} from "../http/reviewAPI";
import {observer} from "mobx-react-lite";
import UnderHeader from "../components/UnderHeader";
import Benefit from "../components/Benefit";
import Rectangle from "../components/Rectangle";
import CourseDirections from "../components/CourseDirections";
import FooterPage from "../components/FooterPage";


const Home = observer(() => {
    const {section} = useContext(Context)

    useEffect(() => {
        fetchSection().then(data => section.setSections(data))
    }, [])
  return (
    <div>
        <UnderHeader/>
        <Benefit/>
        <Rectangle/>
        <CourseDirections/>
        <FooterPage/>
    </div>
  );
});

export default Home
