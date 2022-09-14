import React from 'react';
import Divider from '@mui/material/Divider';

class SectionHeader extends React.Component {
    render() {
      return (
        <div>
          <section class="section-header">
            <div class="box-main">
              <div class="firstHalf">
                {this.props.children}
              </div>
            </div>
          </section>
          <Divider/>
        </div>
      );
  }
}

export default SectionHeader;