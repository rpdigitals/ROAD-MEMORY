<script>
export default {};
</script>
<template>
  <div id="search_container_2">
    <div id="search_2">
      <ul class="nav nav-tabs">
        <li>
          <a
            href="#tour"
            data-bs-toggle="tab"
            id="tab_bt_21"
            class="active show"
            ><span>Tour</span></a
          >
        </li>
        <li>
          <a href="#hotels" data-bs-toggle="tab" id="tab_bt_2"
            ><span>Hotels</span></a
          >
        </li>

        <li>
          <a href="#restaurants" data-bs-toggle="tab" id="tab_bt_3"
            ><span>Restaurants</span></a
          >
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane fade active show row" id="tours ">
          <form>
            <div class="row g-0 custom-search-input-2">
              <div class="col-lg-10">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Tour name..."
                    id="autocomplete"
                  />
                  <i class="icon_pin_alt"></i>
                </div>
              </div>

              <div class="col-lg-2">
                <input type="submit" class="btn_search" value="Search" />
              </div>
            </div>
            <!-- /row -->
          </form>
        </div>
        <!-- End tab -->
        <div class="tab-pane fade" id="hotels">
          <form>
            <div class="row g-0 custom-search-input-2">
              <div class="col-lg-10">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Hotel Name, City..."
                  />
                  <i class="icon_pin_alt"></i>
                </div>
              </div>

              <div class="col-lg-2">
                <input type="submit" class="btn_search" value="Search" />
              </div>
            </div>
            <!-- /row -->
          </form>
        </div>
        <div class="tab-pane fade" id="tour">
          <form>
            <div class="row g-0 custom-search-input-2">
              <div class="col-lg-10">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Tour Name, ..."
                  />
                  <i class="icon_pin_alt"></i>
                </div>
              </div>

              <div class="col-lg-2">
                <input type="submit" class="btn_search" value="Search" />
              </div>
            </div>
            <!-- /row -->
          </form>
        </div>
        <!-- End tab -->
        <div class="tab-pane" id="restaurants">
          <form>
            <div class="row g-0 custom-search-input-2">
              <div class="col-lg-10">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Restaurant Name, City..."
                  />
                  <i class="icon_pin_alt"></i>
                </div>
              </div>

              <div class="col-lg-2">
                <input type="submit" class="btn_search" value="Search" />
              </div>
            </div>
            <!-- /row -->
          </form>
        </div>
        <!-- End tab -->
      </div>
    </div>
    <!-- End search_container_2 -->
  </div>
</template>
