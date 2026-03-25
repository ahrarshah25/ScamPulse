import React, { useState, useCallback } from 'react';
import { MailCheck } from 'lucide-react';
import Swal from 'sweetalert2';
import Button from '../Navbar/Button';
import { subscribeEmail } from '../../../api/sendMail/subscribe.api';
import { sendSubscribeNotification } from "../../../api/notifications/subscribeNotification.api";
import emailHandler from '../../../helpers/emailHandler';

const Input = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => emailHandler(email);

  const subscribe = useCallback(async () => {
    if (!email.trim()) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Email address is required.',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Please enter a valid email address.',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      return;
    }

    setLoading(true);
    try {
      const res = await subscribeEmail(email);
      if (res.status === 200 || res.data?.success) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: `Subscribed successfully! We'll send updates to ${email}.`,
          showConfirmButton: false,
          timer: 3000,
          customClass: {
          popup: "swal-margin-top",
        },
        });
        setEmail('');
        await sendSubscribeNotification(email);
      } else {
        throw new Error('Subscription failed. Please try again.');
      }
    } catch (err) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: err.response?.data?.message || err.message || 'Something went wrong.',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
    } finally {
      setLoading(false);
    }
  }, [email]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-md">
      <label htmlFor="subscribe-email" className="sr-only">
        Email address for scam alerts
      </label>
      <input
        id="subscribe-email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-teal-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
        disabled={loading}
      />
      <Button
        icon={MailCheck}
        name={loading ? 'Subscribing...' : 'Subscribe'}
        onClick={subscribe}
        disabled={loading}
        loading={loading}
        className="w-full sm:w-auto"
      />
    </div>
  );
};

export default Input;