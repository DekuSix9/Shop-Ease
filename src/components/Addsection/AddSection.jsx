import bgImg from '../../assets/Img/image (1).png'
import watchImg from '../../assets/Img/image 9.png'

const AddSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-black shadow-lg rounded-xl p-6 flex items-center justify-center">
                <div className='flex justify-between items-center w-full'>
                    <div className='text-white text-left'>
                        <p className='text-2xl font-medium'>Tk. 5.999</p>
                        <p className="text-white text-5xl font-medium">Apple Watch Series 9</p>
                        <button className='mt-4 h-[55px] w-[150px] bg-[#E27A1E] text-white px-4 py-2 rounded-xl'>Shop Now</button>
                    </div>
                    <div>
                        <img src={watchImg} alt="Apple Watch" />
                    </div>
                </div>
            </div>


            <div class="relative ">
  <img src={bgImg} alt="Image" class="w-full h-full object-cover  "/>
  <div class="absolute top-0 left-0 w-full  p-4 mt-20">
    <p class="text-white text-2xl font-medium">Up to 50%</p>
    <p className='text-white text-5xl font-medium'>WINTER SALE!</p>
    <button 
  className="text-white px-4 py-2  h-[55px] w-[150px]  mt-4 border-2 border-transparent relative"
  style={{
    borderImage: "linear-gradient(to right, #EE777B, #A2FBFD) 1",
   
  }}
>
  Shop Now
</button>

  </div>
</div>

        </div>
    );
};

export default AddSection;
