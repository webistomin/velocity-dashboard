import { Response, Request } from 'express';
import HTTPStatuses from 'http-status-codes';

import { IPageVehiclesResponse } from 'common/types/pages/vehicles';
import { VEHICLES_PAGE_MOCKED_RESPONSE } from 'server/mocks/vehicles-page';

export default (_req: Request, res: Response<IPageVehiclesResponse>) => {
  try {
    return res.json({
      success: true,
      content: VEHICLES_PAGE_MOCKED_RESPONSE(),
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
