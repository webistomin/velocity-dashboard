import { Response, Request } from 'express';
import HTTPStatuses from 'http-status-codes';

import { ANALYTICS_PAGE_MOCKED_RESPONSE } from 'server/mocks/analytics-page';
import { IPageAnalyticsResponse } from 'common/types/pages/analytics';

export default (_req: Request, res: Response<IPageAnalyticsResponse>) => {
  try {
    return res.json({
      success: true,
      content: ANALYTICS_PAGE_MOCKED_RESPONSE(),
    });
  } catch (error) {
    return res.status(HTTPStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
