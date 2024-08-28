/**
 * APIMATIC CalculatorLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { OperationTypeEnum, SimpleCalculatorController } from '../src';
import { testClient } from './testClient';
import { makeApiCall } from './testHelper';

describe('SimpleCalculatorController', () => {
  let controller : SimpleCalculatorController;

  beforeAll(() => {
    controller = new SimpleCalculatorController(testClient);
  });

  it('should multiply', async () => {
    const collect = {
      operation: OperationTypeEnum.MULTIPLY,
      x: 4,
      y: 5
    }

    const response = await makeApiCall(
      () => controller.getCalculate(collect)
    );

    expect(response.statusCode).toBe(200);

    const expected = 20;

    expect(response.result).not.toBeNull();
    expect(response.result).toEqual(expected);
  });
});