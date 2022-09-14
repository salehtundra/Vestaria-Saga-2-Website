import React from 'react';

class SectionBody extends React.Component {
    render() {
      return (
        <section class="section">
          <div class="box-main">
            <div class="firstHalf">
              {this.props.children}
            </div>
          </div>
        </section>
      );
  }
}

export default SectionBody;