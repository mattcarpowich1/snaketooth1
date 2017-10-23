import React, { Component } from 'react';

class InfoText extends Component {

  render() {
    return (
	    	<div className={"info " + this.props.colorSwitch}> 
		    	<p>
		    		You are about to access the Internet through a wireless (WiFi) Internet access node (the "Service") operated by Fulton House.  The purpose of the Service is to provide free public wireless Internet access to visitors of Fulton House.  You may use the Service only if you agree to the following terms of service each time you access the Service.
		    	</p>
		    	<p><strong>Terms of Service (TOS)</strong></p>
		    	<p><strong>Access to WiFi.</strong></p>
		    	<p> 
		    		The Service is a free public service provided by Fulton House. Your access to the Service is completely at the discretion of Fulton House, and your access to the Service may be blocked, suspended, or terminated at any time for any reason including, but not limited to, violation of this Agreement, actions that may lead to liability for Fulton House  disruption of access to other users or networks, or violation of applicable laws or regulations. Fulton House may revise the TOS at any time. You must accept this Agreement each time you use the Service and it is your responsibility to review it for any changes each time.  This is an open wireless network.  No network communication is 100% secure.
		    		</p>
		    		<p>
		    			Please remember: NO network communication should be considered private or protected. All communication over the Fulton House network is subject to monitoring..Fulton House reserves the right to reduce throughput or access as need be.
	    			</p>
	    			<p><strong>Acceptable Use of the Service</strong></p>
	    			<p>
	    				Your use of the Service and any activities conducted online through the Service shall not violate any applicable law or regulation or the rights of Fulton House, or any third party. Fulton House cannot accept any responsibility for any injury or loss that results from inaccurate, unsuitable, offensive, or illegal Internet communications.
	    			</p>
	    			<p><strong>Disclaimer</strong></p>
	    			<p>
	    				You acknowledge (i) that the Service may not be uninterrupted or error-free; (ii) that viruses or other harmful applications may be available through the Service; (iii) that Fulton House does not guarantee the security of the Service and that unauthorized third parties may access your computer or files or otherwise monitor your connection.
    				</p>
    				<p>THE USE OF THE SERVICE FOR THE FOLLOWING ACTIVITIES IS PROHIBITED:</p>
    				<p>Spamming and Invasion of Privacy of Others, Violating Intellectual Property Law, Transmitting Obscene or Indecent Speech or Materials, Transmitting Defamatory or Abusive Language, Hacking or Distribution of Internet Viruses, Worms, Trojan Horses, or Other Destructive Activities.
    				</p>
	    	</div>
    )
  }
}

export default InfoText