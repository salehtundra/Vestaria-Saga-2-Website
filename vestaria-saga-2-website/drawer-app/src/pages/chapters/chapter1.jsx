import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import Footer from "../../components/guide/Footer"

const Chapter1 = () => {
    return (
        <div id="main">
          <SectionHeader>
            <h1 class="text-big">
              Chapter 1
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p class="text-small">
              Chapter 1 Goes Here
            </p>
          </SectionBody>
          <Footer />
        </div>
    )
}

export default Chapter1