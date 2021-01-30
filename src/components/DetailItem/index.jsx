import './styles.scss'

const DetailItem = ({ title, children }) => (
  <>
    <div className="col-12 col-sm-4 col-md-12 col-lg-3 detail-item-title">
      {title}
    </div>
    <div className="col-12 col-sm-8 col-md-12 col-lg-9 detail-item-value">
      {children}
    </div>
  </>
)

export default DetailItem
