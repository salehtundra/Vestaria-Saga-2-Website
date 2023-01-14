import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter24 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 24"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Data Goes Here
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Softlock Warning
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          While you do not need to deploy any units outside the fortress to access the levers you need to access, you do need to deploy units at the teleporter room entrance. If you do not deploy anyone in the bottom right you cannot progress through this level.<br/><br/>
          Technically, there is another way to softlock this level but you have plan it out and actively try to softlock yourself. If you broke all your weapons from the farming dark knights and skeletons and used all the healing items and food buffs on the previous chapter and then proceeded to not bring any long range healing into this level, the guest units cannot defend themselves from the waves of enemies and may die before you can free them. Death of any of the guest units is a game over on this map.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter24