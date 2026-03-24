import chandelierCouple from '../../../assets/invitation/chandelier-couple.png';
import closeupCouple from '../../../assets/invitation/closeup-couple.png';
import coverCouple from '../../../assets/invitation/cover-couple.png';
import doorwayCouple from '../../../assets/invitation/doorway-couple.png';
import floralBride from '../../../assets/invitation/floral-bride.png';
import flowerBride from '../../../assets/invitation/flower-bride.png';
import formalPortrait from '../../../assets/invitation/formal-portrait.png';
import gardenCouple from '../../../assets/invitation/garden-couple.png';
import gardenGroom from '../../../assets/invitation/garden-groom.png';
import gownEditorial from '../../../assets/invitation/gown-editorial.png';
import interiorBride from '../../../assets/invitation/interior-bride.png';
import { createInvitationEventDate } from '../../../lib/date';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

const eventDate = createInvitationEventDate('2026-10-28', 'Tức ngày 10 tháng 10 âm lịch');

export const invitationContent: InvitationContent = {
  couple: {
    groom: {
      key: 'groom',
      mark: 'Đ',
      name: 'Trung Đức',
      houseLabel: 'Nhà trai',
      location: 'Hồng Sơn, Hà Nội',
      parents: ['Bố: Nguyễn Viết Cường', 'Mẹ: Trần Thị Mơ'],
      portrait: gardenGroom,
      romanLabel: 'GROOM',
    },
    bride: {
      key: 'bride',
      mark: 'T',
      name: 'Ngọc Thảo',
      houseLabel: 'Nhà gái',
      location: 'Vĩnh Yên, Phú Thọ',
      parents: ['Bố: Nguyễn Văn Bình', 'Mẹ: Phạm Thị Lan'],
      portrait: floralBride,
      romanLabel: 'BRIDE',
    },
  },
  eventDate,
  footer: {
    note: 'Cảm ơn vì luôn bên cạnh và yêu thương. Bọn mình rất mong được gặp bạn trong ngày vui này!',
    photos: [coverCouple, formalPortrait, chandelierCouple],
    quote: 'You are the love of my life',
    tagline: 'Happy Wedding',
  },
  hero: {
    date: eventDate.displayShort,
    image: chandelierCouple,
    invitees: 'Bạn Trang và anh Nam',
    quote: 'You are the love of my life',
    statusLabel: 'We Got Married',
    subquote: "It's been a long time, see you at the wedding!",
    title: 'Thiệp mời cưới của chúng mình',
  },
  labels: {
    arcWordmark: 'HAPPY WEDDING',
    ceremonyOfUs: ['THIỆP MỜI CƯỚI CỦA', 'CHÚNG MÌNH'],
    coverEyebrow: 'YOU ARE THE LOVE OF MY LIFE',
    coverLine: 'Happy Wedding',
    eventWordmark: 'Wedding',
    familyWordmark: 'Wedding House',
    giftHeading: 'HỘP QUÀ MỪNG CƯỚI',
    letterTitle: 'My Lover',
    scheduleWordmark: 'Happy Wedding',
    welcomeWordmark: 'HAPPY WEDDING',
  },
  letter: {
    eyebrow: 'My Lover',
    paragraphs: [
      'Gửi đến bạn tấm thiệp cưới đầy yêu thương. Những ai nhận được lời mời này đều là những người đặc biệt với bọn mình.',
      'Mong bạn và gia đình sẽ đến chung vui, cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa.',
      'Cảm ơn vì luôn bên cạnh và yêu thương. Bọn mình rất mong được gặp bạn trong ngày vui này!',
    ],
    photos: [coverCouple, formalPortrait],
    title: 'Một lời mời dịu dàng, dành cho người tụi mình thật sự quý.',
  },
  party: {
    address: [
      'Số 9 - Ngách 2, Ngõ 33 đường Hùng Vương,',
      'Phường Vĩnh Yên, Tỉnh Phú Thọ',
    ],
    dayLabel: eventDate.weekdayLabel,
    image: doorwayCouple,
    note: eventDate.lunarNote ?? '',
    subtitle: 'Cùng gia đình chúng tôi vào lúc',
    time: '16:00',
    title: 'Đến dự buổi tiệc chung vui',
    venue: 'Nhà hàng Trống Đồng',
  },
  rsvp: {
    attendeeCount: '01',
    attendeeLabel: 'Số lượng người tham dự',
    confirmButtonLabel: 'Xác nhận',
    giftNote: 'Cảm ơn tình cảm của mọi người đã dành cho chúng mình.',
    giftTitle: 'Hộp quà mừng cưới',
    previewHint: 'Nút này chỉ là preview giao diện, chưa có xử lý form thật.',
    question: 'Bạn sẽ tham dự chứ?',
    title: 'Xác nhận tham dự',
  },
  schedule: {
    dateLabel: 'Happy Wedding',
    photo: flowerBride,
    subline: `${eventDate.lunarNote ?? ''} | 10:00 AM`,
    summary: [
      'Ngày mình chính thức gọi nhau là vợ chồng là ngày câu chuyện nhỏ của hai đứa viết sang một chương mới.',
      'Cảm ơn vì đã tìm thấy nhau, và chọn ở lại — mãi mãi.',
    ],
    title: 'Sweet Wedding Invitation',
  },
  stories: [
    {
      id: 'origin',
      description:
        'Mình gặp nhau vào mùa nắng đẹp nhất của năm. Ngày 30 tháng 3, bình yên như bao ngày khác, chỉ là từ hôm đó thế giới của hai đứa bỗng có thêm một người để chờ, để nhớ, để thương.',
      eyebrow: 'Ngày bắt đầu',
      image: closeupCouple,
      title: 'Mọi thứ đổi khác chỉ từ một ngày rất bình thường',
      tone: 'paper',
    },
    {
      id: 'simple',
      description:
        'Mình chẳng có những buổi hẹn hò cầu kỳ, chỉ là cùng nhau ăn một bữa cơm, đi dạo quanh phố và kể chuyện linh tinh đến khuya. Hạnh phúc đôi khi chỉ giản dị vậy thôi.',
      eyebrow: 'Bình yên',
      image: gardenCouple,
      title: 'Yêu nhau bằng những điều rất đời thường',
      tone: 'paper',
    },
    {
      id: 'details',
      description:
        'Tụi mình đã cùng nhau chọn từng bông hoa, từng bộ trang phục cho ngày ấy. Mỗi chi tiết nhỏ đều mang trong đó một chút hồi hộp, một chút háo hức và rất nhiều yêu thương.',
      eyebrow: 'Chuẩn bị',
      image: interiorBride,
      title: 'Ngày cưới được dựng lên từ rất nhiều dịu dàng',
      tone: 'paper',
    },
    {
      id: 'quote',
      description:
        'Thương một, để sau mỗi năm lại thương lên mười. Em có anh ở trong đời, anh có em, là được rồi.',
      eyebrow: 'Thương mến',
      image: gownEditorial,
      title: 'Một câu nói nhỏ nhưng đủ để giữ lấy cả ngày vui',
      tone: 'wine',
    },
  ],
  welcome: {
    body:
      'Mình chẳng có những buổi hẹn hò cầu kỳ, chỉ là cùng nhau ăn một bữa cơm, đi dạo quanh phố, kể chuyện linh tinh đến khuya. Nhưng hóa ra, hạnh phúc đôi khi chỉ giản dị vậy thôi.',
    intro:
      'Ba tháng sau, chúng mình chẳng cần lý do gì lớn lao. Chỉ biết là muốn cùng nhau đi hết đoạn đường còn lại. Và thế là, một đám cưới ra đời — tròn tám tháng kể từ ngày bắt đầu yêu.',
    title: 'Welcome To Wedding',
  },
};

export const invitationVariants: InvitationVariant[] = [
  {
    accentLabel: 'Common Invitation',
    ceremonyHost: 'Tại gia đình nhà trai',
    ceremonySummary:
      'Biến thể gốc của bộ thiệp, giữ cả nhịp RSVP cho nhà trai và nhà gái trong cùng một preview.',
    ceremonyTime: '18:00',
    ceremonyTitle: 'Lễ thành hôn',
    ceremonyVenue: 'Tư gia nhà trai',
    familyOrder: ['groom', 'bride'],
    giftTags: ['Nhà trai', 'Nhà gái'],
    heroPairOrder: ['groom', 'bride'],
    id: 'common',
    label: 'Thiệp chung',
    rsvpOptions: [
      {
        description: 'Dành cho khách xác nhận tham dự ở phần nhà gái.',
        id: 'attend-bride',
        title: 'Mình sẽ tham dự nhà gái',
      },
      {
        description: 'Dành cho khách xác nhận tham dự ở phần nhà trai.',
        id: 'attend-groom',
        title: 'Mình sẽ tham dự nhà trai',
      },
      {
        description: 'Gửi lời chúc từ xa nhưng vẫn giữ được phần bố cục của mẫu gốc.',
        id: 'decline',
        title: 'Tiếc quá, mình không tham dự được',
      },
    ],
    summary: 'Bao gồm đầy đủ tiệc chung vui, lễ thành hôn và phần xác nhận cho cả hai nhà.',
  },
  {
    accentLabel: 'Bride House',
    ceremonyHost: 'Tại gia đình nhà gái',
    ceremonySummary:
      'Biến thể riêng cho lễ vu quy, giữ nguyên ngôn ngữ hình ảnh nhưng đổi trọng tâm sang phía nhà gái.',
    ceremonyTime: '18:00',
    ceremonyTitle: 'Lễ vu quy',
    ceremonyVenue: 'Tư gia nhà gái',
    familyOrder: ['bride', 'groom'],
    giftTags: ['Nhà gái'],
    heroPairOrder: ['bride', 'groom'],
    id: 'bride',
    label: 'Thiệp nhà gái',
    rsvpOptions: [
      {
        description: 'Biến thể đơn giản hóa để khách xác nhận tham dự trực tiếp.',
        id: 'attend',
        title: 'Nhất định rồi, mình sẽ tham dự',
      },
      {
        description: 'Giữ nguyên thẻ từ chối tham dự như trong PDF mẫu.',
        id: 'decline',
        title: 'Tiếc quá, mình không tham dự được',
      },
    ],
    summary: 'Tập trung vào lễ vu quy, thứ tự tên và family card chuyển sang bố cục ưu tiên nhà gái.',
  },
  {
    accentLabel: 'Groom House',
    ceremonyHost: 'Tại gia đình nhà trai',
    ceremonySummary:
      'Biến thể riêng cho lễ thành hôn của nhà trai, tối giản phần RSVP và giữ nhịp màu gốc của thiết kế.',
    ceremonyTime: '18:00',
    ceremonyTitle: 'Lễ thành hôn',
    ceremonyVenue: 'Tư gia nhà trai',
    familyOrder: ['groom', 'bride'],
    giftTags: ['Nhà trai'],
    heroPairOrder: ['groom', 'bride'],
    id: 'groom',
    label: 'Thiệp nhà trai',
    rsvpOptions: [
      {
        description: 'Dành cho khách xác nhận tham dự trực tiếp với nhà trai.',
        id: 'attend',
        title: 'Nhất định rồi, mình sẽ tham dự',
      },
      {
        description: 'Giữ lại card từ chối để bố cục cân với mẫu PDF.',
        id: 'decline',
        title: 'Tiếc quá, mình không tham dự được',
      },
    ],
    summary: 'Ưu tiên phần lễ thành hôn và giữ trật tự thông tin như file nhà trai.',
  },
];