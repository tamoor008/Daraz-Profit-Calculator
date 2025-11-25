import { CalculatedValues, FulfillmentType } from '../types';
import styles from '../styles/calculator.module.css';

interface ResultsPanelProps {
  fulfillmentType: FulfillmentType;
  calculated: CalculatedValues;
  categoryLabel: string;
}

const currency = new Intl.NumberFormat('en-PK', {
  style: 'currency',
  currency: 'PKR',
  maximumFractionDigits: 2,
});

const percent = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 2,
});

export const ResultsPanel = ({ fulfillmentType, calculated, categoryLabel }: ResultsPanelProps) => (
  <section className={styles.resultsCard}>
    <div className={styles.cardHeader}>
      <div>
        <p className={styles.eyebrow}>Results</p>
        <h2>Profitability</h2>
        <p>Live ROI snapshot for your selected fulfillment strategy.</p>
      </div>
    </div>

    <div className={styles.resultList}>
      <div className={styles.resultRow}>
        <span>Fulfillment Type</span>
        <strong>{fulfillmentType}</strong>
      </div>
      <div className={styles.resultRow}>
        <span>Category</span>
        <strong>{categoryLabel}</strong>
      </div>
      <div className={styles.resultRow}>
        <span>Daraz Commission</span>
        <strong>{currency.format(calculated.commissionAmount)}</strong>
      </div>
      <div className={styles.resultRow}>
        <span>Payment Handling Fee</span>
        <strong>{currency.format(calculated.paymentHandlingAmount)}</strong>
      </div>
      {calculated.freeShippingCharge > 0 && (
        <div className={styles.resultRow}>
          <span>Free Shipping Max (6%)</span>
          <strong>{currency.format(calculated.freeShippingCharge)}</strong>
        </div>
      )}
      {calculated.voucherCharge > 0 && (
        <div className={styles.resultRow}>
          <span>Voucher Max (2%)</span>
          <strong>{currency.format(calculated.voucherCharge)}</strong>
        </div>
      )}
      <div className={styles.resultRow}>
        <span>VAT on Shipping Charges</span>
        <strong>{currency.format(calculated.shippingVatCharges)}</strong>
      </div>
      <div className={styles.resultRow}>
        <span>VAT on Daraz Commission</span>
        <strong>{currency.format(calculated.commissionVatCharges)}</strong>
      </div>
      {calculated.orderHandlingVatCharges > 0 && (
        <div className={styles.resultRow}>
          <span>VAT on Handling Fee</span>
          <strong>{currency.format(calculated.orderHandlingVatCharges)}</strong>
        </div>
      )}
      {calculated.freeShippingVatCharges > 0 && (
        <div className={styles.resultRow}>
          <span>VAT on Free Shipping Max</span>
          <strong>{currency.format(calculated.freeShippingVatCharges)}</strong>
        </div>
      )}
      {calculated.voucherVatCharges > 0 && (
        <div className={styles.resultRow}>
          <span>VAT on Voucher Max</span>
          <strong>{currency.format(calculated.voucherVatCharges)}</strong>
        </div>
      )}
      <div className={styles.resultRow}>
        <span>Daraz Charges</span>
        <strong>{currency.format(calculated.darazCharges)}</strong>
      </div>
      <div className={styles.resultRow}>
        <span>Net</span>
        <strong>{currency.format(calculated.net)}</strong>
      </div>
      <div className={styles.resultRowHighlight}>
        <div>
          <p>Profit</p>
          <strong>{currency.format(calculated.profit)}</strong>
        </div>
        <div>
          <p>ROI</p>
          <strong className={calculated.roi >= 0 ? styles.positive : styles.negative}>
            {percent.format(calculated.roi / 100)}
          </strong>
        </div>
      </div>
    </div>
  </section>
);

