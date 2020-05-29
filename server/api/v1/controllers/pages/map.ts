import { Response, Request } from 'express';
import HTTPStatuses from 'http-status-codes';

import { IPageMapResponse } from 'common/types/pages/map';
import { MAP_PAGE_MOCKED_RESPONSE } from 'server/mocks/map-page';

export default (_req: Request, res: Response<IPageMapResponse>) => {
  try {
    return res.json({
      success: true,
      content: MAP_PAGE_MOCKED_RESPONSE(),
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
