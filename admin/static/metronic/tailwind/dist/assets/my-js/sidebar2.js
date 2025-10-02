const sideHtmll = `<div
          class="fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 bg-muted [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]"
          data-kt-drawer="true"
          data-kt-drawer-class="kt-drawer kt-drawer-start flex"
          id="sidebar"
        >
          <div
            class="hidden lg:flex items-center justify-center shrink-0 pt-8 pb-3.5"
            id="sidebar_header"
          >
            <a href="index.html">
              <img
                class="dark:hidden min-h-[42px]"
                src="https://promiselandestate.com/wp-content/uploads/2022/11/Promiseland-logo-1.png"
                width="100px"
              />
              <img
                class="hidden dark:block min-h-[42px]"
                src="https://promiselandestate.com/wp-content/uploads/2022/11/Promiseland-logo-1.png"
              />
            </a>
          </div>
          <div
            class="kt-scrollable-y-hover grow gap-2.5 shrink-0 flex items-center pt-5 lg:pt-0 ps-3 pe-3 lg:pe-0 flex-col"
            data-kt-scrollable="true"
            data-kt-scrollable-dependencies="#sidebar_header,#sidebar_footer"
            data-kt-scrollable-height="auto"
            data-kt-scrollable-offset="80px"
            data-kt-scrollable-wrappers="#sidebar_menu_wrapper"
            id="sidebar_menu_wrapper"
          >
            <!-- Sidebar Menu -->
            <div
              class="kt-menu flex flex-col gap-2.5 grow"
              data-kt-menu="true"
              id="sidebar_menu"
            >
              <div class="kt-menu-item ">
                <a
                  class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-active:border-border kt-menu-item-active:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2"
                  href="index.html"
                >
                  <span
                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground"
                  >
                    <i class="ki-filled ki-chart-line-star text-xl"> </i>
                  </span>
                  <span
                    class="kt-menu-title text-xs kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground font-medium"
                  >
                    Dashboard
                  </span>
                </a>
              </div>

              <div class="kt-menu-item">
                <a
                  class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-active:border-border kt-menu-item-active:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2"
                  href="client.html"
                >
                  <span
                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground"
                  >
                    <i class="ki-filled ki-users text-xl"></i>
                  </span>
                  <span
                    class="kt-menu-title text-xs kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground font-medium"
                  >
                    Clients
                  </span>
                </a>
              </div>
              <div class="kt-menu-item">
                <a
                  class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-active:border-border kt-menu-item-active:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2"
                  href="invoice.html"
                >
                  <span
                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground"
                  >
                    <i class="ki-filled ki-clipboard text-xl"></i>
                  </span>
                  <span
                    class="kt-menu-title text-xs kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground font-medium"
                  >
                    Invoices
                  </span>
                </a>
              </div>
              <div class="kt-menu-item">
                <a
                  class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-active:border-border kt-menu-item-active:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2"
                  href="payment.html"
                >
                  <span
                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground"
                  >
                    <i class="ki-filled ki-dollar text-xl"></i>
                  </span>
                  <span
                    class="kt-menu-title text-xs kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground font-medium"
                  >
                    Payments
                  </span>
                </a>
              </div>
              <div class="kt-menu-item">
                <a
                  class="kt-menu-link rounded-[9px] border border-transparent kt-menu-item-active:border-border kt-menu-item-active:bg-background kt-menu-link-hover:bg-background kt-menu-link-hover:border-border w-[62px] h-[60px] flex flex-col justify-center items-center gap-1 p-2"
                  href="properties.html"
                >
                  <span
                    class="kt-menu-icon kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground"
                  >
                    <i class="ki-filled ki-bank text-xl"></i>
                  </span>
                  <span
                    class="kt-menu-title text-xs kt-menu-item-here:text-primary kt-menu-item-active:text-primary kt-menu-link-hover:text-primary text-secondary-foreground font-medium"
                  >
                    Properties
                  </span>
                </a>
              </div>
              
            </div>
            <!-- End of Sidebar Menu -->
          </div>
          <div
            class="flex flex-col gap-5 items-center shrink-0 pb-4"
            id="sidebar_footer"
          >
            <div class="flex flex-col gap-1.5">
              <!-- Chat -->

              <!--Chat Drawer-->

              <!--End of Chat Drawer-->
              <!-- End of Chat -->
              <!-- Apps -->

              <!-- End of Apps -->
            </div>
            <!-- User -->
            <div
              data-kt-dropdown="true"
              data-kt-dropdown-offset="10px, 10px"
              data-kt-dropdown-offset-rtl="-20px, 10px"
              data-kt-dropdown-placement="bottom-start"
              data-kt-dropdown-placement-rtl="bottom-end"
              data-kt-dropdown-trigger="click"
            >
             <div
                class="cursor-pointer shrink-0"
                data-kt-dropdown-toggle="true"
              >
                <img
                  alt=""
                  class="size-9 rounded-lg shrink-0"
                  src="static/metronic/tailwind/dist/assets/media/avatars/300-2.png"
                />
              </div>
              <div
                class="kt-dropdown-menu w-[250px]"
                data-kt-dropdown-menu="true"
              >
                <div
                  class="flex items-center justify-between px-2.5 py-1.5 gap-1.5"
                >
                  <div class="flex items-center gap-2">
                    <img
                      alt=""
                      class="size-9 shrink-0 rounded-full border-2 border-green-500"
                      src="static/metronic/tailwind/dist/assets/media/avatars/300-2.png"
                    />
                    <div class="flex flex-col gap-1.5">
                      <span
                        class="text-sm text-foreground font-semibold leading-none"
                      >
                        Cody Fisher
                      </span>
                      <a
                        class="text-xs text-secondary-foreground hover:text-primary font-medium leading-none"
                        
                      >
                        c.fisher@gmail.com
                      </a>
                    </div>
                  </div>
                  <span
                    class="kt-badge kt-badge-sm kt-badge-primary kt-badge-outline"
                  >
                    Pro
                  </span>
                </div>
                <ul class="kt-dropdown-menu-sub">
                  <li>
                    <div class="kt-dropdown-menu-separator"></div>
                  </li>

                  <li>
                    <a
                      class="kt-dropdown-menu-link"
                     
                    >
                      <i class="ki-filled ki-profile-circle"> </i>
                      My Profile
                    </a>
                  </li>

                  <li>
                    <div class="kt-dropdown-menu-separator"></div>
                  </li>
                </ul>
                <div class="px-2.5 pt-1.5 mb-2.5 flex flex-col gap-3.5">
                  <div class="flex items-center gap-2 justify-between">
                    <span class="flex items-center gap-2">
                      <i
                        class="ki-filled ki-moon text-base text-muted-foreground"
                      >
                      </i>
                      <span class="font-medium text-2sm"> Dark Mode </span>
                    </span>
                    <input
                      class="kt-switch"
                      data-kt-theme-switch-state="dark"
                      data-kt-theme-switch-toggle="true"
                      name="check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                  <a
                    class="kt-btn kt-btn-outline justify-center w-full"
                    href="authentication/classic/sign-in.html"
                  >
                    Log out
                  </a>
                </div>
              </div>
            </div>
            <!-- End of User -->
          </div>
        </div>`;
document.getElementById("sideHtmll").innerHTML = sideHtmll;
const headhtmlll = ` <div class="kt-modal" data-kt-modal="true" id="search_modal">
      <div class="kt-modal-content max-w-[600px] top-[15%]">
        <div class="kt-modal-header py-4 px-5">
          <i class="ki-filled ki-magnifier text-muted-foreground text-xl"> </i>
          <input
            class="kt-input kt-input-ghost"
            name="query"
            placeholder="Tap to start search"
            type="text"
            value=""
          />
          <button
            class="kt-btn kt-btn-sm kt-btn-icon kt-btn-dim shrink-0"
            data-kt-modal-dismiss="true"
          >
            <i class="ki-filled ki-cross"> </i>
          </button>
        </div>
      </div>
    </div>`;
document.getElementById("headhtmlll").innerHTML = headhtmlll;
