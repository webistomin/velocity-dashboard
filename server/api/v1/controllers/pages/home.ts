import { Response, Request } from 'express';
import HTTPStatuses from 'http-status-codes';

import { HOME_PAGE_MOCKED_RESPONSE } from 'server/mocks/home-page';
import { IPageHomeResponse } from 'common/types/pages/home';

export default (_req: Request, res: Response<IPageHomeResponse>) => {
  try {
    return res.json({
      success: true,
      content: HOME_PAGE_MOCKED_RESPONSE(),
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
