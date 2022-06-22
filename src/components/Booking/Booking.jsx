import React from 'react'
import styles from './Booking.module.scss'

const Booking = () => {
  return (
    <div className={styles.sectionBooking}>
        <div className={styles.row}>
            <div className={styles.book}>
                <div className={styles.bookForm}>
                  <form action="#" className={styles.form}>
                    <div className={`${styles.marginBottomMedium}`}>
                      <h2 className={styles.headingSecondary}>
                        Start Booking Now
                      </h2>
                    </div>
                    <div className={styles.formGroup}>
                      <input type="text" className={styles.formInput} placeholder="Full Name" id="name" required />
                      <label for="name" className={styles.formLabel}>Full Name</label>
                    </div>
                    <div className={styles.formGroup}>
                      <input type="email" className={styles.formInput} placeholder="Email Address" id="email" required />
                      <label for="email" className={styles.formLabel}>Email Address</label>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking