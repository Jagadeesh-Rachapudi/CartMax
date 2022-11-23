import React from "react";
import ElectronicCards from "../../../Utils/Electronic_Cards/ElectronicCards";

function EL() {
  return (
    <div className="EL-Body">
      <div className="EL-Hedding-Row">
        <div className="El-Hedding">Latest Deals</div>
        <div className="EL-Right-Text">
          <div className="El-Timmer">
            <div className="El-Hrs">
              <h2 className="El-Current-Hrs">21</h2>
              <div className="El-hrs-Indicator">HOURS</div>
            </div>
            <div className="El-Hrs">
              <h2 className="El-Current-Hrs">50</h2>
              <div className="El-hrs-Indicator">MINS</div>
            </div>
            <div className="El-Hrs">
              <h2 className="El-Current-Hrs">39</h2>
              <div className="El-hrs-Indicator">SECS</div>
            </div>
          </div>
          <a href="#ViewAll" className="El-ViewAll">
            View All
          </a>
        </div>
      </div>
      <div className="El-Products-Row1">
        <div className="El-Prod1">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-p1.png?alt=media&token=65641062-e9a4-4391-8139-76374bdac4e4"
            bar="true"
          />
        </div>
        <div className="El-Prod2">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-EarPhones.png?alt=media&token=028642dc-441b-4fb3-bd89-d02b86c56153"
            bar="true"
          />
        </div>
        <div className="El-Prod3">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-White-Watch.png?alt=media&token=a3a82cb4-3e5a-48bd-92b4-e4a6156eb516"
            bar="true"
          />
        </div>
        <div className="El-Prod4">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEBS-PROD-10.png?alt=media&token=5c48e11c-6e8f-44eb-b6b2-b2976fc9dd53"
            bar="true"
          />
        </div>
        <div className="El-Prod5">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEBS-PROD-12.png?alt=media&token=6ea8425c-ecaa-4c66-9526-3195046eabd7"
            bar="true"
          />
        </div>
      </div>
      <div className="E-Top-Cat-Hedding">Top Product Categories</div>
      <div className="El-Top-Catogires">
        <div className="El-Cat1 Cat1">
          <div className="El-Cat-Image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-Cat1.png?alt=media&token=a9e5f78a-a11b-4858-962d-a2da36319bee"
              alt=""
            />
          </div>
          <div className="El-Cat1-Hedding">
            Desktop PCs
            <br /> & Laptops
          </div>
        </div>
        <div className="El-Cat1 Cat2">
          <div className="El-Cat-Image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-cat2.png?alt=media&token=42e5f37b-fd58-4d7a-bf2f-280186c8079e"
              alt=""
            />
          </div>
          <div className="El-Cat1-Hedding">
            Home & Audio <br />
            Enternteinment
          </div>
        </div>
        <div className="El-Cat1 Cat3">
          <div className="El-Cat-Image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-cat3.png?alt=media&token=49def46c-5030-4d75-805b-9e734866c017"
              alt=""
            />
          </div>
          <div className="El-Cat1-Hedding">
            Home & Audio <br />
            Enternteinment
          </div>
        </div>
      </div>
      <div className="El-Top-Catogires">
        <div className="El-Cat1 Cat4">
          <div className="El-Cat-Image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-cat4.png?alt=media&token=67f8d1eb-611c-4461-8816-02318bf16fac"
              alt=""
            />
          </div>
          <div className="El-Cat1-Hedding">
            Video Games <br />& Consoles
          </div>
        </div>
        <div className="El-Cat1 Cat5">
          <div className="El-Cat-Image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-cat5.png?alt=media&token=90b51db5-3070-4804-a908-51543df75fc6"
              alt=""
            />
          </div>
          <div className="El-Cat1-Hedding">
            Gedgets <br />& Accesories
          </div>
        </div>
        <div className="El-Cat1 Cat6">
          <div className="El-Cat-Image">
            <img
              className="El-Cat-Image"
              src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-cat6.png?alt=media&token=df939d4c-3ee8-4dba-b73a-3ba386cacb07"
              alt=""
            />
          </div>
          <div className="El-Cat1-Hedding">Photo Cameras</div>
        </div>
      </div>

      {/* Best sales */}
      <div className="EL-p1">
        <div className="EL-ads">
          <img src="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-Adds.jpg?alt=media&token=f2105b8b-cfb6-4d4a-b4ab-57ee27b7e7fe" />
        </div>
        <div className="EL-p2">
          <div className="EL-p2-title">
            <div className="EL-p2-hedding">Best Sales</div>
            <div className="El-p2-subHedding">
              <div className="El-Top20">Top 20</div>
              <div className="El-option1"> Phones & Tablets</div>
              <div className="El-option2">Laptops & Computers</div>
              <div className="El-option3"> Video Cameras</div>
            </div>
          </div>
          <div className="EL-p2-prods">
            <div className="El-Prod6">
              <ElectronicCards
                source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-White-Watch.png?alt=media&token=a3a82cb4-3e5a-48bd-92b4-e4a6156eb516"
                bar="true"
              />
            </div>
            <div className="El-Prod7">
              <ElectronicCards
                source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEBS-PROD-10.png?alt=media&token=5c48e11c-6e8f-44eb-b6b2-b2976fc9dd53"
                bar="true"
              />
            </div>
            <div className="El-Prod8">
              <ElectronicCards
                source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEBS-PROD-12.png?alt=media&token=6ea8425c-ecaa-4c66-9526-3195046eabd7"
                bar="true"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="El-Last-Row">
        <div className="El-Prod9">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEBS-PROD-12.png?alt=media&token=6ea8425c-ecaa-4c66-9526-3195046eabd7"
            bar="true"
          />
        </div>
        <div className="El-Prod10">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-White-Watch.png?alt=media&token=a3a82cb4-3e5a-48bd-92b4-e4a6156eb516"
            bar="true"
          />
        </div>
        <div className="El-Prod11">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-EarPhones.png?alt=media&token=028642dc-441b-4fb3-bd89-d02b86c56153"
            bar="true"
          />
        </div>
        <div className="El-Prod12">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FEL-p1.png?alt=media&token=65641062-e9a4-4391-8139-76374bdac4e4"
            bar="true"
          />
        </div>
        <div className="El-Prod13">
          <ElectronicCards
            source="https://firebasestorage.googleapis.com/v0/b/cartmax-39396.appspot.com/o/HF%2FE-White-Watch.png?alt=media&token=a3a82cb4-3e5a-48bd-92b4-e4a6156eb516"
            bar="true"
          />
        </div>
      </div>
    </div>
  );
}

export default EL;
