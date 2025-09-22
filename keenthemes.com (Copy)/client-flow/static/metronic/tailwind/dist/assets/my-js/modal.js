const modal = ` <el-dialog>
      <dialog
        id="invoiceDialog"
        aria-labelledby="invoice-title"
        class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent z-50"
        style="
          position: fixed; /* fixed */
          inset: 0; /* inset-0 (top:0; right:0; bottom:0; left:0) */
          width: auto; /* size-auto → width:auto */
          height: auto; /* size-auto → height:auto */
          max-height: none; /* max-h-none */
          max-width: none; /* max-w-none */
          overflow-y: auto; /* overflow-y-auto */
          background-color: transparent; /* bg-transparent */
          backdrop-filter: none; /* backdrop:bg-transparent (no backdrop color) */
          z-index: 50;
        "
      >
        <!-- Backdrop -->
        <el-dialog-backdrop
          class="fixed inset-0 bg-black/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in my-backdrop"
        >
        </el-dialog-backdrop>

        <!-- Modal Content -->
        <div
          tabindex="0"
          class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0 my-container"
        >
          <el-dialog-panel
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-closed:sm:translate-y-0 data-closed:sm:scale-95 my-panel"
          >
            <!-- Header -->
            <div
              class="flex items-center justify-between border-b px-6 py-4 my-header"
            >
              <h3my-panel
                id="invoice-title"
                class="text-lg font-semibold text-gray-900"
                style="
                  font-size: 1.125rem; /* text-lg → 18px */
                  line-height: 1.75rem; /* Tailwind's line-height for text-lg */
                  font-weight: 600; /* font-semibold */
                  color: #111827;
                "
              >
                Invoice Details
              </h3my-panel>
              <button
                command="close"
                commandfor="invoiceDialog"
                class="text-gray-400 hover:text-gray-600 my-link"
              >
                ✕
              </button>
            </div>

            <!-- Body -->
            <div class="px-6 py-4 space-y-4 my-section">
              <p
                class="text-sm text-gray-500"
                style="
                  font-size: 0.875rem; /* text-sm → 14px */
                  line-height: 1.25rem; /* Tailwind's default for text-sm */
                  color: #6b7280;
                "
              >
                Invoice INV-001 for Ocean View Apartment
              </p>

              <div
                class="grid grid-cols-2 gap-4 text-sm"
                style="
                  display: grid; /* grid */
                  grid-template-columns: repeat(
                    2,
                    minmax(0, 1fr)
                  ); /* grid-cols-2 */
                  gap: 1rem; /* gap-4 → 16px */
                  font-size: 0.875rem; /* text-sm → 14px */
                  line-height: 1.25rem;
                "
              >
                <div>
                  <p
                    class="font-medium text-gray-600"
                    style="font-weight: 500; /* font-medium */ color: #4b5563"
                  >
                    Invoice ID
                  </p>
                  <p class="text-gray-900" style="color: #111827">INV-001</p>
                </div>
                <div>
                  <p
                    class="font-medium text-gray-600"
                    style="font-weight: 500; /* font-medium */ color: #4b5563"
                  >
                    Status
                  </p>
                  <p
                    class="text-yellow-600 font-semibold"
                    style="
                      color: #ca8a04; /* text-yellow-600 */
                      font-weight: 600;
                    "
                  >
                    Partially Paid
                  </p>
                </div>
                <div>
                  <p
                    class="font-medium text-gray-600"
                    style="font-weight: 500; /* font-medium */ color: #4b5563"
                  >
                    Issue Date
                  </p>
                  <p class="text-gray-900" style="color: #111827">9/1/2024</p>
                </div>
                <div>
                  <p class="font-medium text-gray-600">Due Date</p>
                  <p class="text-gray-900">9/30/2024</p>
                </div>
              </div>

              <hr class="border-gray-200" />

              <div>
                <p class="font-medium text-gray-700">Description</p>
                <p class="text-sm text-gray-500">
                  Monthly Service Charge - September 2024
                </p>
              </div>

              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span>Service Charge</span>
                  <span class="font-medium">₦200,000</span>
                </div>
                <div class="flex justify-between">
                  <span>Security Fee</span>
                  <span class="font-medium">₦30,000</span>
                </div>
                <div class="flex justify-between">
                  <span>Maintenance Fee</span>
                  <span class="font-medium">₦20,000</span>
                </div>
              </div>

              <hr class="border-gray-200" />

              <div class="flex justify-between font-semibold text-gray-900">
                <span>Total Amount</span>
                <span>₦250,000</span>
              </div>

              <div class="flex justify-between text-sm">
                <span class="text-green-600 font-semibold">Paid Amount</span>
                <span class="text-green-600 font-semibold">₦125,000</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-red-600 font-semibold">Remaining Amount</span>
                <span class="text-red-600 font-semibold">₦125,000</span>
              </div>

              <div class="pt-2">
                <div class="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Payment Progress</span>
                  <span>50%</span>
                </div>
                <div
                  class="w-full bg-gray-200 h-2"
                  style="
                    width: 100%; /* w-full */
                    background-color: #e5e7eb;
                    border-radius: 9999px; /* rounded-full */
                    height: 0.5rem;
                  "
                >
                  <div
                    class="bg-red-500 h-2 rounded-full w-1/2"
                    style="
                      background-color: #ec4899; /* bg-red-500 */
                      height: 0.5rem; /* h-2 */
                      border-radius: 9999px; /* rounded-full */
                      width: 50%;
                    "
                  ></div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="flex justify-end gap-2 border-t bg-gray-50 px-6 py-4">
              <button
                command="close"
                commandfor="invoiceDialog"
                class="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Close
              </button>
              <button
                class="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Download
              </button>
              <button
                class="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                History
              </button>
              <button class="my-danger-btn">Make Payment</button>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>`;
document.getElementById("modal").innerHTML = modal;
export {};
//# sourceMappingURL=modal.js.map
// Modal JS
