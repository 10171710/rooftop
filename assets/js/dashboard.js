/**
 * AURA SKY - Guest & Admin Dashboard Logic
 * Powered by Chart.js & Interactive Live Seating / Table Management
 */

document.addEventListener('DOMContentLoaded', () => {
  initGuestDashboard();
  initAdminDashboard();
});

/* ===================================================================
   1. Guest Dashboard Interactive Handlers
   =================================================================== */
function initGuestDashboard() {
  const cancelResBtns = document.querySelectorAll('.cancel-res-btn');
  cancelResBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.reservation-card');
      if (confirm('Are you sure you want to cancel this rooftop table reservation?')) {
        if (card) {
          card.classList.add('opacity-50', 'pointer-events-none');
          const badge = card.querySelector('.status-badge');
          if (badge) {
            badge.textContent = 'Cancelled';
            badge.className = 'status-badge px-2.5 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20';
          }
          btn.remove();
          showToast('Reservation Cancelled', 'Table reservation #AK-9482 has been released.', 'warning');
        }
      }
    });
  });

  // Redeem reward points
  const redeemBtns = document.querySelectorAll('.redeem-reward-btn');
  redeemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const points = btn.getAttribute('data-points') || '500';
      const perk = btn.getAttribute('data-perk') || 'Complimentary Cocktail';
      
      const currentPtsEl = document.getElementById('guestPointsTotal');
      if (currentPtsEl) {
        let current = parseInt(currentPtsEl.textContent.replace(/,/g, ''), 10);
        if (current >= parseInt(points, 10)) {
          current -= parseInt(points, 10);
          currentPtsEl.textContent = current.toLocaleString();
          showToast('Perk Unlocked!', `You redeemed ${points} points for "${perk}". Bar voucher generated!`, 'success');
          btn.textContent = 'Claimed';
          btn.disabled = true;
          btn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
          showToast('Insufficient Points', 'You need more rooftop visits to claim this VIP perk.', 'warning');
        }
      }
    });
  });
}

/* ===================================================================
   2. Admin Dashboard Metrics, Charts & Interactive Seating Map
   =================================================================== */
function initAdminDashboard() {
  // Check if admin charts canvas exists
  const revCanvas = document.getElementById('revenueAnalyticsChart');
  const occCanvas = document.getElementById('occupancyDonutChart');

  if (revCanvas && typeof Chart !== 'undefined') {
    new Chart(revCanvas, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri (DJ Night)', 'Sat (Sky Party)', 'Sun (Sunset Brunch)'],
        datasets: [
          {
            label: 'Beverage & Cocktails ($)',
            data: [4200, 5800, 6900, 8400, 16800, 24500, 14200],
            borderColor: '#D4AF37',
            backgroundColor: 'rgba(212, 175, 55, 0.12)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#D4AF37',
            pointRadius: 4
          },
          {
            label: 'Dining & Tasting Menu ($)',
            data: [6100, 7200, 8100, 10500, 19200, 28400, 18900],
            borderColor: '#38BDF8',
            backgroundColor: 'rgba(56, 189, 248, 0.05)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#38BDF8',
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans', size: 12 } }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94A3B8' }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: {
              color: '#94A3B8',
              callback: function(value) { return '$' + value.toLocaleString(); }
            }
          }
        }
      }
    });
  }

  if (occCanvas && typeof Chart !== 'undefined') {
    new Chart(occCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Skyline Terrace', 'VIP Cabanas', 'Bar Lounge', 'Indoor Dining'],
        datasets: [{
          data: [45, 25, 20, 10],
          backgroundColor: ['#D4AF37', '#F59E0B', '#818CF8', '#10B981'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans', size: 11 }, padding: 16 }
          }
        },
        cutout: '72%'
      }
    });
  }

  // Interactive Live Seating Map Tables
  const tables = document.querySelectorAll('.floor-table-node');
  const detailsPane = document.getElementById('tableDetailCard');

  tables.forEach(tbl => {
    tbl.addEventListener('click', () => {
      tables.forEach(t => t.classList.remove('ring-2', 'ring-amber-400', 'scale-105'));
      tbl.classList.add('ring-2', 'ring-amber-400', 'scale-105');

      const name = tbl.getAttribute('data-table-name') || 'Table 101';
      const zone = tbl.getAttribute('data-table-zone') || 'Terrace Edge';
      const status = tbl.getAttribute('data-table-status') || 'Occupied';
      const guest = tbl.getAttribute('data-guest') || 'Walk-in Guests';
      const seats = tbl.getAttribute('data-seats') || '4 Seats';

      if (detailsPane) {
        detailsPane.innerHTML = `
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs uppercase tracking-wider text-amber-400 font-medium">${zone}</span>
                <h4 class="text-xl font-bold text-white font-serif">${name}</h4>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-semibold ${
                status === 'Occupied' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 
                status === 'Reserved' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }">${status}</span>
            </div>

            <div class="grid grid-cols-2 gap-3 text-sm">
              <div class="p-3 rounded-lg bg-black/40 border border-white/5">
                <span class="text-xs text-gray-400 block">Current Guest:</span>
                <span class="font-semibold text-white">${guest}</span>
              </div>
              <div class="p-3 rounded-lg bg-black/40 border border-white/5">
                <span class="text-xs text-gray-400 block">Capacity:</span>
                <span class="font-semibold text-white">${seats}</span>
              </div>
            </div>

            <div class="flex gap-2 pt-2">
              <button onclick="showToast('Status Updated', '${name} marked as Available', 'info')" class="flex-1 py-2 px-3 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 rounded-lg text-xs font-semibold">
                Set Available
              </button>
              <button onclick="showToast('Bill Printed', 'Check for ${name} dispatched to POS', 'success')" class="flex-1 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-xs font-bold">
                Print Check
              </button>
            </div>
          </div>
        `;
      }
    });
  });

  // Table reservation status updater in admin table
  const actionBtns = document.querySelectorAll('[data-admin-action]');
  actionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-admin-action');
      const row = btn.closest('tr');
      const guestName = row?.querySelector('.guest-name-cell')?.textContent.trim() || 'Guest';

      if (action === 'approve') {
        const badge = row?.querySelector('.res-status-badge');
        if (badge) {
          badge.textContent = 'Confirmed';
          badge.className = 'res-status-badge px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
        }
        showToast('Reservation Approved', `VIP Table for ${guestName} has been approved.`, 'success');
      } else if (action === 'cancel') {
        if (confirm(`Cancel reservation for ${guestName}?`)) {
          const badge = row?.querySelector('.res-status-badge');
          if (badge) {
            badge.textContent = 'Cancelled';
            badge.className = 'res-status-badge px-2.5 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20';
          }
          showToast('Reservation Cancelled', `Booking for ${guestName} marked as cancelled.`, 'warning');
        }
      }
    });
  });
}

