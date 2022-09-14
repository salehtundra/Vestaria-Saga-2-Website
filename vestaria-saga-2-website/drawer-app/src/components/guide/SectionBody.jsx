import React from 'react';

class SectionBody extends React.Component {
    render() {
      return (
        <div>
        <section class="section section-body">
          <div class="box-main">
            <div class="firstHalf">
              {this.props.children}
            </div>
          </div>
        </section>
        <br/>
        </div>
      );
  }
}

export default SectionBody;