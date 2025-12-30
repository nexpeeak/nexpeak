import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/home1/Banner';
import FeautureOne from '@/components/sections/home1/FeautureOne';
import About from '@/components/sections/home1/About';
import ChooseOne from '@/components/sections/home1/ChooseOne';
import ServicesOne from '@/components/sections/home1/ServicesOne';
import Testimonial from '@/components/sections/home1/Testimonial';
import Cta from '@/components/sections/home1/Cta';

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <FeautureOne />
        <About />
        <ChooseOne />
        <ServicesOne />
        {/* <Brand /> */}
       
        {/* <CaseOne />  */}
        <Testimonial />
        {/* <Team /> */}
        <Cta />
        {/* <Blog /> */}
      </Layout>
    </>
  );
}
