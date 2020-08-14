// Copyright 2020 The AMPHTML Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {UNIT_DEC, UNIT_SEC, UNIT_MS} from '../../checks/constants.js';

export default class CoreWebVitalsReport {
  constructor(reportData) {
    this.unit = reportData.unit;
    console.log(reportData, document.getElementById(reportData.checkId));
    this.container = document.getElementById(reportData.checkId);
    this.label = this.container.querySelector('label');
    this.indicator = this.container.querySelector('aside');
    this.indicatorLabel = this.indicator.querySelector('span');

    this.render(reportData.data);
  }

  render(data) {
    this.container.classList.add(data.category.toLowerCase());
    this.label.textContent = data.category;

    const indicatorX = data.percentile / data.distributions[2].min;
    this.indicator.style.transform = `translateX(${indicatorX * 100}%)`;
    this.indicatorLabel.textContent = `${
      data.percentile / this.unit.conversion
    } ${this.unit.name}`;
  }
}