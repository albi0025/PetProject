import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, ProgressBar } from 'react-bootstrap';


class Sponsorship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountSponsored: this.props.pet.amountSponsored
    };
    this.handleAmountSponsoredChange = this.handleAmountSponsoredChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.progressPercentage = this.progressPercentage.bind(this);
  }

  handleAmountSponsoredChange(e) {
    this.setState({amountSponsored: e.target.value});
  }

  submitHandler(e){
    e.preventDefault();
    this.sponsorPet(this.state.amountSponsored, this.props.pet.animalId);
  }

  sponsorPet(amountSponsored, animalId) {
    fetch('/pet/' + animalId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amountSponsored: amountSponsored
      })
    });
  }

  progressPercentage(num) {
    return (num/500) * 100;
  }

  render() {

    return(
      <div>
        <br/>
        <ProgressBar now={this.progressPercentage(this.state.amountSponsored)} label={`$${this.state.amountSponsored}`} />
        <form>
          <input onChange={this.handleAmountSponsoredChange} type="email" name="email"
                 value={this.state.handleAmountSponsoredChange} placeholder="$$$ Amount"/>
          <br/>
          <br/>
          <Button onClick={this.submitHandler} type="submit">Sponsor</Button>
        </form>
      </div>
    );
  }
}

Sponsorship.propTypes = {
  pet: React.PropTypes.object,
  userStore: React.PropTypes.object,
};

export default inject("userStore")(observer(Sponsorship));
