import '../../styles/footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="bgf">
                    <div className="col-content">
                        <div className='link-content'>
                            <h4>Hỗ Trợ - Dịch Vụ</h4>
                            <ul>
                                <li><a href="/mua-hang-tra-gop">Mua hàng trả góp</a></li>
                                <li><a href="/huong-dan-dat-hang">Hướng dẫn đặt hàng và thanh toán</a></li>
                                <li><a href="/order/check">Tra cứu đơn hàng</a></li>
                                <li><a href="/chinh-sach-bao-hanh">Chính sách bảo hành</a></li>
                                <li><a href="/dat-hang/bao-hanh-mo-rong">Phạm vi, điều khoản gói bảo hành mở rộng</a></li>
                                <li><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
                                <li><a href="/chinh-sach-giai-quyet-khieu-nai">Chính sách giải quyết khiếu nại</a></li>
                                <li><a href="/dieu-khoan-mua-ban-hang-hoa">Điều khoản mua bán hàng hóa</a></li>
                                <li><a href="/cau-hoi-thuong-gap">Câu hỏi thường gặp</a></li>
                            </ul>
                        </div>
                        <div className='link-content'>
                            <h4><a>Thông Tin Liên Hệ</a></h4>
                            <ul>
                                <li><a href="/mua-hang-online">Bán hàng Online</a></li>
                                <li><a href="/cham-soc-khach-hang">Chăm sóc khách hàng</a></li>
                                <li><a href="/tin-tuc/hoang-ha-care-dich-vu-sua-chua-dien-thoai-may-tinh-bang-voi-gia-tot-nhat-thi-truong">Dịch vụ sửa chữa Hoàng Hà Care</a></li>
                                <li><a href="/hop-tac-kinh-doanh">Hợp tác kinh doanh</a></li>
                                <li><a href="/trung-tam-bao-hanh">Tra cứu bảo hành</a></li>
                            </ul>
                        </div>
                        <div className='link-content'>
                            <h4><a href="/he-thong-cua-hang">Hệ thống 127 siêu thị trên toàn quốc</a></h4>
                            <ul>
                                <li><a href="/he-thong-cua-hang">Danh sách 127 siêu thị trên toàn quốc</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Tổng đài</h4>
                            <a  className="hotline" href="tel:1900.2091">1900.2091</a>
                        </div>
                        <div>
                            <h4>
                                Thanh toán miễn phí
                            </h4>
                            <ul className='list-logo'>
                                <li>
                                    <a ></a><img src="src/assets/visa.png" />
                                    
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h4>Hình thức vận chuyển</h4>
                            <ul className='list-logo'>
                                <li>
                                    <img src="src/assets/nhattin.png" />
                                    
                                </li>
                            </ul>
                            <div className='log-gov'>
                                <a href="http://online.gov.vn/Home/WebDetails/28738"><img src="src/assets/bocongthuong.png" /></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="info">

                        <p>© 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:  0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký thay đổi ngày 24/11/2022)</p>
                        <p><strong>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</strong></p>
                        <p>Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai, Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: <strong>Hoàng Ngọc Chiến</strong>. </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;