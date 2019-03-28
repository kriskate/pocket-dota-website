import React from 'react';
import { MDBContainer, } from "mdbreact";
import { AppName } from '../Utils/Assets';

export default class License extends React.PureComponent {
  componentDidMount() {
    this.props.headerBackground(true);
  }
  render() {
    return (
      <MDBContainer className="padtop">
        <p className="mb-4 hoverer">
          <AppName /> - Copyright 2019 @ kriskate
        </p>
    
        <p className="mb-4 hoverer">
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at:
        </p>

        <p className="mb-4 hoverer">
          <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>
        </p>

        <p className="mb-4 hoverer">
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License.
        </p>
      </MDBContainer>
    )
  }
}