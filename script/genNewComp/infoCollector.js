/* eslint-disable @typescript-eslint/no-require-imports */
const inquirer = require('inquirer');
const fs = require('fs-extra');
const { resolve } = require('path');

const listFilePath = '../../packages/list.json';

const RegxMap = {
  IS_COMP_NAME: /^[A-Z]/,
  IS_COMP_ZH_NAME:
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
};

const kebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

module.exports = async () => {
  const tempMsg = await inquirer.prompt([
    {
      type: 'input',
      message: 'Enter en_name of the component(English only, capitalized, eg: Foo):',
      name: 'compName',
      validate(answer) {
        const done = this.async();
        const validateRes = RegxMap.IS_COMP_NAME.test(answer);
        if (!validateRes) {
          done('Enter the correct component name as required!');
          return;
        }
        const listData = fs.readJSONSync(resolve(__dirname, listFilePath));
        if (listData.find((item) => item.compName === answer)) {
          done('The compoment name already exists, please change the name and try again.');
          return;
        }
        done(null, true);
      },
    },
    {
      type: 'input',
      message: 'Enter zh_name of the component(Chinese only):',
      name: 'compZhName',
      validate(answer) {
        const done = this.async();
        const validateRes = RegxMap.IS_COMP_ZH_NAME.test(answer);
        if (!validateRes) {
          done('Enter the correct component name as required!');
          return;
        }
        done(null, true);
      },
    },
  ]);
  const { compName } = tempMsg;
  const defaultDesc = `这是 youthKit 的 ${compName} 组件`;
  const tempDesc = await inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the description of the component:',
      name: 'compDesc',
      default: defaultDesc,
    },
  ]);

  const compClassName = kebabCase(tempMsg.compName);
  return {
    ...tempMsg,
    ...tempDesc,
    compClassName,
  };
};
