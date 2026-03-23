import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';
import { FloralStem } from '../CommonInvitationCanvasHelpers';

export function LetterSection() {
  return (
    <section className='bg-[#5d1b18] px-8 pb-10 pt-8 text-[#efe2d1]'>
      <p className='font-script text-center text-[3rem] leading-none text-[#eddcc8]'>My Lover</p>
      <div className='mt-6 space-y-3 text-[0.88rem] leading-6 text-[#f0e1d2]'>
        <p>Gửi đến bạn tấm thiệp cưới đầy yêu thương. Những ai nhận được lời mời này đều là những người đặc biệt với bọn mình.</p>
        <p>Mong bạn và gia đình sẽ đến chung vui, cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa.</p>
        <p>Cảm ơn vì luôn bên cạnh và yêu thương. Bọn mình rất mong được gặp bạn trong ngày vui này!</p>
      </div>

      <div className='mt-7 grid grid-cols-[0.82fr_0.18fr] items-end gap-5'>
        <img alt='Letter portrait' className='w-full object-cover' loading='lazy' src={commonInvitationAssets.closeupCouple} />
        <FloralStem className='h-32 w-10 text-[#b98d74]' />
      </div>
    </section>
  );
}