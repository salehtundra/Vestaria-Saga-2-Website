import React from 'react';
import Divider from '@mui/material/Divider';

class SectionTitle extends React.Component {
    render() {
      return (
        <div>
          <section class="section-title section">
            <div class="box-main">
              <div class="firstHalf">
                <h1 class="text-massive">{this.props.title}</h1>
              </div>
            </div>
          </section>
          <Divider/>
        </div>
      );
  }
}

export default SectionTitle;