export const keyBannerPost = 'POST';
export const keyBannerHome = 'HOME';

export const positionBannerUnderTitle = 'UNDERTITLE';
export const positionBannerUnderAuthor = 'UNDERAUTHOR';

export const bannerPositionEnum = {
  POST: {
    UNDER_TITLE: {
      title: 'Dưới tiêu đề',
      value: 'UNDERTITLE'
    },
    UNDER_AUTHOR: {
      title: 'Dưới tác giả',
      value: 'UNDERAUTHOR'
    }
  },
  HOME: {
    TOP: {
      title: 'Phía trên',
      value: 'TOP'
    },
    BOTTOM: {
      title: 'Phía dưới',
      value: 'BOTTOM'
    }
  }
};

export const positionBanner = [
  {
    title: 'Dưới tiêu đề',
    value: 'UNDERTITLE'
  },
  {
    title: 'Dưới tác giả',
    value: 'UNDERAUTHOR'
  }
];

export const positionBannerHome = [
  {
    title: 'Phía trên',
    value: 'TOP'
  },
  {
    title: 'Phía dưới',
    value: 'BOTTOM'
  }
];
export const bannerKind = [
  {
    id: 'banner-type-1',
    title: 'Hình ảnh & URL',
    value: 1
  },
  {
    id: 'banner-type-2',
    title: 'Native Ads',
    value: 2
  },
  {
    id: 'banner-type-3',
    title: 'Subscription Form',
    value: 3
  }
];

export const bannerTypeEnum = {
  IMAGE_URL: {
    id: 'banner-type-1',
    title: 'Hình ảnh & URL',
    value: 1
  },
  NATIVE_ADS: {
    id: 'banner-type-2',
    title: 'Native Ads',
    value: 2
  },
  SUBSCRIBER_FORM: {
    id: 'banner-type-3',
    title: 'Subscription Form',
    value: 3
  }
};
