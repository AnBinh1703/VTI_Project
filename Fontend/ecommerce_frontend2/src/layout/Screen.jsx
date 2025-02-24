import React, { useContext } from 'react'
import { OutstandProduct } from '../components/home/OutstandProduct'
import { Category } from '../components/app/Category'
import '../styles/mobilephone.css'
import { Link } from 'react-router-dom'
import { ProductFilterList } from '../components/app/ProductFilterList'
import { AppContext } from '../context/AppProvider'
import Slider from 'react-slick'
import { Button } from 'antd'
import { Corevalue } from '../components/app/Corevalue'
import { Header } from '../components/header/Header'
import { Social } from '../components/app/Social'
export const Screen = () => {
  const images = [
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/15/web-90-chuyen-muc_638356646440053322.jpg"
    },
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/14/web-v29e-03.jpg"
    },
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/banner-02.jpg"
    },
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/hotsale-dien-thoai-vivo-1200x200.jpg"
    }
  ]

  const settings = useContext(AppContext)
  const setting = { ...settings }
  setting.slidesToShow = 1
  return (
    <div className='slider-mobilephone-list'>
      <Header/>
      <Social/>
      <Slider {...setting}>
        {
          images.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="" />
            </div>
          ))
        }
      </Slider>
      <div className='category-mobilephone'>
        <Category />
      </div>
      <div>
        <div>
          <h3 className='mobilephone-redirect'><i></i><Link id='home-page' to={'/'}>Trang chủ</Link> &gt;<Link id='mobilephone-link' to={'/mobilephone'}> Điện thoại</Link></h3>
        </div>
        <div className='product-filter-list-content'>
          <ProductFilterList />
        </div>
        <div>
          <h2 className='product-list-title'>Điện thoại</h2>
        </div>
        <OutstandProduct a={false} />
        <div className='more-product'>
          <Button className='btn-more-product'>Xem thêm sản phẩm</Button>
        </div>
      </div>
      <div className='page-content'>
        <p>
          Smartphone hay còn được biết tới là một loại điện thoại di động với hệ điều hành được tích hợp khiến cho 1 chiếc điện thoại trở nên đa công dụng hơn rất nhiều. Điện thoại di động từ trước đến nay phát triển theo 2 xu hướng. 1 là rất nhỏ, tiên lợi mang đi mọi nơi. 2 là to như chiếc tablet kết hợp giữa điện thoại và máy tính. Những chiếc điện thoại di động thường bỏ túi, thường được kết hợp các tính năng của một chiếc điện thoại thông thường như nghe và thực hiện các cuộc gọi thông thường, nhận tin nhắc văn bản và các tính năng phổ biến khác như là máy nghe nhạc, lịch, máy tính, trò chơi, máy ảnh và cả quáy quay video nữa, Hầu hết những chiếc điện thoại di động hiện nay đều có thể truy cập internet và cài đặt được nhiều ứng dụng từ bên thứ 3 trong CH play hay Appstore. <br /><br />

          Điện thoại di động chính thức ra mắt và được chấp nhận từ năm 1999 và được sử dụng phổ biến từ năm 2000. Hầu hết những chiếc điện thoại di động sản xuất từ năm 2012 trở đi đều có thể sử dụng 3G và 4G. Tính cho tới quý thứ 3 của năm 2012 thì đã có 1 tỷ chiếc điện thoại được bán ra trên toàn thế giới. TÍnh đến năm đã có 65% người sử dụng điện thoại di động là smartphone. Đến năm 2016, con số này đã chiếm tới 79% trong thị trường di động. Và hiện nay, điện thoại di động đa phần chạy hệ điều hành IOS và Android.<br /><br />

          Vào đầu năm 2007, Apple giới thiệu iPhone và đây là 1 trong những chiếc điện thoại di động smartphone đầu tiên có sử dụng cảm ứng đa giao diện. và iOS là hệ điều hành độc quyèn được phát hành bởi Apple và chỉ dành cho những chiếc iPhone mà hãng sản xuất ra. Những fan nhà Táo cũng đã thoát ra khỏi sự bó buộc vào máy tính khi hãng này đã cung cấp chương trình đồng bộ hóa dữ liệu người dùng thông qua iCloud. Tuy nhiên, iPhone hay iOS vẫn chỉ đứng thứ 2 khi điện thoại di động sử dụng nhiều nhất vẫn là Android.<br /><br />



          Android là hệ điều hành điện thoại di động giá rẻ và phổ biến hơn cả do Tập đoàn Google phát triển. Cho đến năm 2015 thì đã có tới 325 triệu chiếc điện thoại di động giá rẻ sử dụng hệ điều hành Android, dẫn đầu trong số các nền tảng hệ điều hành. Và hãng Samsung cũng là một trong những nhà sản xuất các thiết bị điện thoại di động giá rẻ hàng đầu hiện nay. HIện nay ngành công nghệ điện thoại di động ngày càng phát triển, trong một năm có tới hàng chục chiếc điện thoại di động mới được nghiên cứu và phát hành ra ngoài thị trường. Ngoài ra, khi lựa chọn một chiếc điện thoại di động chúng ta còn quá nhiều vấn đề cần phải xem xét tới. Ví như thời lượng pin, chiếc điện thoại di động gí rẻ đó sử dụng loại chip gì, hay đơn giản là loại điện thoại di động đó có những màu nào và loại điện thoại đó có nhiều phụ kiện đi kèm hay không. Chọn được một chiếc điện thoại di động giá rẻ chất lượng tốt cho bạn hay những người thân trong gia đình là một quyết định quan trọng. Trước đó, Hoàng Hà Mobile đưa ra khẩu hiệu “Những gì chúng tôi không có, tức là bạn không cần”. Hoàng Hà đưa ra rất nhiều sự lựa chọn cho bạn. một chiếc điện thoại di động bền, đẹp, hay điện thoại di động giá rẻ lại có khả năng chống nước chống bụi, có thẻ nhớ mở rộng và pin rất khỏe.<br /><br />

          Đưa ra quyết định mua một chiếc điện thoại di động giá rẻ không hề dễ dàng. Nhưng hãy để Hoàng Hà Mobile giúp bạn. Chúng tôi cung cấp mọi mặt hàng thiết bị di động đủ loại hãng và phân khúc. Với sự lựa chọn là 1 chiếc điện thoại di động giá rẻ smartphone bền và tốt thì bạn có thể lựa chọn Xiaomi hoặc Samsung cũng có rất nhiều mẫu điện thoại thuộc phân khúc tầm trung chất lượng tốt. Hay nếu bạn tìm kiếm những chiếc điện thoại di động chính hãng và giá rẻ thì Hoàng Hà cũng có rất nhiều sự lựa chọn cho bạn. Đặc biệt là khi bạn có thể mua điện thoại với mức giá vô cùng phải chăng khi tham gia gói mua hàng trả góp tại Hoàng Hà. Hoàng Hà Mobile – Siêu thị điện thoại di động giá rẻ nhất, miễn phí vận chuyển toàn quốc, bảo hành 12 tháng, trả góp 0%.</p>
      </div>
      <div>
        <Corevalue/>
      </div>
    </div>
  )
}

